import { ActionArgs, LoaderArgs, json } from '@remix-run/node'
import { useLoaderData, useRouteLoaderData } from '@remix-run/react'
import type { ShouldRevalidateFunction } from '@remix-run/react'
import { SwiperSlide } from 'swiper/react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { imageSizeCookie } from '~/cookies'
import { ImageFragment } from '~/types'
import { getUrl } from '~/location'
import { RouteListItem } from '~/route'
import { Content } from '~/ui'
import {
  ImageToolbar,
  ImageTitle,
  ImageContent,
  RouteList,
  SizeButton,
  FullScreenButton,
  SvgImage,
  ThemeButton,
  ToolbarRoute,
  FullScreenContext,
} from '~/paper'
import {
  ImageSlider,
  ImageSize,
  fetchImage,
  useImageCache,
  useImageIndex,
  useImageRoute,
  useMounted,
} from '~/image'

export const shouldRevalidate: ShouldRevalidateFunction = (props) => {
  const { defaultShouldRevalidate, nextParams, formData } = props
  if (formData?.get('imageSize')) return true
  if (nextParams.route) return false
  return defaultShouldRevalidate
}

export type ImageData = {
  image: ImageFragment
  imageSize: ImageSize
}

export const useImageData = () =>
  useRouteLoaderData('$location.$sector.($image).($route)') as ImageData

export const action = async ({ request }: ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await imageSizeCookie.parse(cookieHeader)) || {}
  const form = await request.formData()
  const s = form.get('imageSize') as ImageSize
  cookie.imageSize = Object.values(ImageSize).includes(s) ? s : ImageSize.MEDIUM
  return json(
    { success: true },
    {
      status: 200,
      headers: {
        'Set-Cookie': await imageSizeCookie.serialize(cookie),
      },
    }
  )
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
  const s = cookie?.imageSize
  const imageSize = Object.values(ImageSize).includes(s) ? s : ImageSize.MEDIUM
  return json({ imageSize, image })
}

export default function ImagePage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image, imageSize } = useLoaderData<typeof loader>()

  const idx = useImageIndex({ sector, image })
  const route = useImageRoute({ image })
  const cache = useImageCache({ image })
  const mounted = useMounted()
  const fs = useFullScreenHandle()

  const images = mounted ? sector?.attributes?.images?.data : [image]

  return (
    <Content className="fixed top-14 left-0 right-0 bottom-0">
      <FullScreen className="relative flex-1 w-full h-full" handle={fs}>
        <FullScreenContext.Provider value={fs}>
          <ImageSlider
            location={location}
            sector={sector}
            image={image}
            imageIndex={idx}
            mounted={mounted}
          >
            {images?.map((image, i) => {
              const isActive = !mounted || i === idx
              const isVisible = !mounted || (i >= idx - 1 && i <= idx + 1)
              const cached = isVisible ? cache.current[image.id!] : undefined
              return (
                <SwiperSlide
                  key={image.id}
                  className="flex flex-col"
                  virtualIndex={i}
                >
                  <ImageTitle>{image.attributes?.name}</ImageTitle>
                  {isVisible && (
                    <ImageContent>
                      <SvgImage
                        location={location}
                        sector={sector}
                        image={image}
                        route={isActive ? route : null}
                        routes={cached?.routes}
                        imageSize={imageSize}
                        data={cached?.data}
                      />
                      {!fs.active && (
                        <RouteList className="swiper-no-swiping">
                          {cached?.routes?.map((r) => (
                            <RouteListItem
                              key={r.id}
                              route={r}
                              active={isActive && route?.id === r.id}
                              url={getUrl(location, sector, image, r)}
                            />
                          ))}
                        </RouteList>
                      )}
                    </ImageContent>
                  )}
                </SwiperSlide>
              )
            })}
          </ImageSlider>
          <ImageToolbar>
            {route && fs.active && <ToolbarRoute route={route} />}
            <ThemeButton />
            <SizeButton imageSize={imageSize} />
            <FullScreenButton />
          </ImageToolbar>
        </FullScreenContext.Provider>
      </FullScreen>
    </Content>
  )
}
