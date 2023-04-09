import { ActionArgs, LoaderArgs, json, redirect } from '@remix-run/node'
import { Link, useLoaderData, ShouldRevalidateFunction } from '@remix-run/react'
import { SwiperSlide } from 'swiper/react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { Content, Header, List, Main, Title } from '~/ui'
import { ImageSlider, ImageSize, fetchImage } from '~/image'
import { ImageToolbar, SizeButton, FullScreenButton, SvgImage } from '~/paper'
import { RouteListItem } from '~/route'
import { imageSizeCookie } from '~/cookies'
import { getUrl } from '~/location'
import {
  useImageCache,
  useImageIndex,
  useImageRoute,
  useMounted,
} from '~/image'

export const shouldRevalidate: ShouldRevalidateFunction = ({
  defaultShouldRevalidate,
  nextParams,
}) => {
  if (nextParams.route) {
    return false
  }
  return defaultShouldRevalidate
}

export const action = async ({ request }: ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await imageSizeCookie.parse(cookieHeader)) || {}

  const form = await request.formData()
  const size = form.get('imageSize') as string

  cookie.imageSize = ImageSize.hasOwnProperty(size) ? size : ImageSize.medium

  return redirect(request.referrer, {
    status: 200,
    headers: {
      'Set-Cookie': await imageSizeCookie.serialize(cookie),
    },
  })
}

export const loader = async ({ request, params }: LoaderArgs) => {
  const { data, errors } = await fetchImage(params)
  const image = data?.image?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('<br />')
  if (error) {
    throw new Response('Image Loader Error', { status: 500 })
  }
  if (!image) {
    throw new Response('Image Not Found', { status: 404 })
  }
  const cookieHeader = request.headers.get('Cookie')
  const cookie = await imageSizeCookie.parse(cookieHeader)
  const size = cookie?.imageSize || ImageSize.medium
  const imageSize = ImageSize.hasOwnProperty(size) ? size : ImageSize.medium
  const route = image.attributes?.routes?.data.find(
    (r) => r.attributes?.slug === params.route
  )
  return json({ imageSize, image, route })
}

export default function ImagePage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image, imageSize } = useLoaderData<typeof loader>()

  const imageIndex = useImageIndex({ sector, image })
  const route = useImageRoute({ image })
  const cache = useImageCache({ image })
  const mounted = useMounted()
  const fullScreen = useFullScreenHandle()

  const images = mounted ? sector?.attributes?.images?.data : [image]

  return (
    <Main className="fixed w-full h-full">
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={getUrl(location)}>{location.attributes?.name}</Link> &gt;{' '}
        <Link to={getUrl(location, sector)}>{sector.attributes?.name}</Link>
      </Header>
      <Content className="relative flex-1">
        <FullScreen className="w-full h-full" handle={fullScreen}>
          <ImageSlider
            location={location}
            sector={sector}
            image={image}
            imageIndex={imageIndex}
            mounted={mounted}
          >
            {images?.map((image, i) => {
              const ii = imageIndex
              const isActive = !mounted || i === ii
              const isVisible = !mounted || (i >= ii - 1 && i <= ii + 1)
              const cached = isVisible ? cache.current[image.id!] : undefined
              return (
                <SwiperSlide
                  key={image.id}
                  className="flex flex-col"
                  virtualIndex={i}
                >
                  <Title>{image.attributes?.name}</Title>
                  {isVisible && (
                    <div className="flex flex-1 flex-col md:flex-row-reverse">
                      <div className="relative aspect-video md:aspect-auto md:flex-1 bg-slate-800">
                        <SvgImage
                          className="absolute top-0 left-0 right-0 bottom-0"
                          imageSize={imageSize}
                          image={image}
                          route={isActive ? route : null}
                          data={cached?.data}
                        />
                      </div>
                      {!fullScreen.active && (
                        <div className="swiper-no-swiping relative flex-1 md:flex-none md:w-[250px]">
                          <List className="absolute top-0 left-0 right-0 bottom-0 overflow-auto bg-white">
                            {cached?.routes?.map((r) => (
                              <RouteListItem
                                key={r.id}
                                route={r}
                                active={isActive && route?.id === r.id}
                                url={getUrl(location, sector, image, r)}
                              />
                            ))}
                          </List>
                        </div>
                      )}
                    </div>
                  )}
                </SwiperSlide>
              )
            })}
          </ImageSlider>
        </FullScreen>
        <ImageToolbar>
          <FullScreenButton fullScreen={fullScreen} />
          <SizeButton imageSize={imageSize} />
        </ImageToolbar>
      </Content>
    </Main>
  )
}
