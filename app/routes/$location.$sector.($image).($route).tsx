import { useCallback, useEffect, useMemo, useRef } from 'react'
import { json, LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData, useNavigate } from '@remix-run/react'
import type { ShouldRevalidateFunction } from '@remix-run/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Virtual, Keyboard } from 'swiper'

import { execute } from '~/data.server'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { Content, Header, Main, Title } from '~/ui'
import { PaperImage } from '~/paper'
import { RouteList, RouteListItem } from '~/route'
import { getUrl } from '~/location'
import {
  useImageCache,
  useImageIndex,
  useImageRoute,
  useMounted,
} from '~/image'
import {
  ImageDocument,
  ImageItemFragment,
  ImageQuery,
  ImageQueryVariables,
} from '~/types'

export const shouldRevalidate: ShouldRevalidateFunction = ({
  defaultShouldRevalidate,
  nextParams,
}) => {
  if (nextParams.route) {
    return false
  }
  return defaultShouldRevalidate
}

export const loader = async ({ params }: LoaderArgs) => {
  const { data, errors } = await execute<ImageQuery, ImageQueryVariables>(
    ImageDocument,
    params
  )
  const image = data?.image?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('<br />')
  if (error) {
    throw new Response('Image Loader Error', { status: 500 })
  }
  if (!image) {
    throw new Response('Image Not Found', { status: 404 })
  }
  const route = image.attributes?.routes?.data.find(
    (r) => r.attributes?.slug === params.route
  )
  return json({ image, route })
}

const swiperModules = [Virtual, Keyboard]

export default function SectorImagePage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image } = useLoaderData<typeof loader>()

  const imageIndex = useImageIndex({ sector, image })
  const route = useImageRoute({ image })
  const cache = useImageCache({ image })
  const mounted = useMounted()

  const images = mounted ? sector?.attributes?.images?.data : [image]

  /**
   * Swiper
   */
  const swiperRef = useRef<SwiperType | null>(null)
  const imageRef = useRef<ImageItemFragment | null | undefined>(image)
  const virtual = useMemo(
    () =>
      mounted
        ? {
            enabled: true,
            addSlidesBefore: 1,
            addSlidesAfter: 1,
          }
        : false,
    [mounted]
  )
  const navigate = useNavigate()
  const onSwiperReady = useCallback(
    (swiper: SwiperType) => (swiperRef.current = swiper),
    []
  )
  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      const images = sector?.attributes?.images?.data || []
      const image = images[swiper.activeIndex]
      if (image && image.id !== imageRef.current?.id) {
        imageRef.current = image
        navigate(getUrl(location, sector, image), { replace: true })
      }
    },
    [location, sector, navigate]
  )
  useEffect(() => {
    if (image && image.id !== imageRef.current?.id) {
      const images = sector?.attributes?.images?.data || []
      const index = images.findIndex((i) => i.id === image.id)
      if (index > -1) {
        imageRef.current = image
        swiperRef.current?.slideTo(index)
      }
    }
  }, [image, sector?.attributes?.images?.data])

  return (
    <Main>
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={getUrl(location)}>{location.attributes?.name}</Link> &gt;{' '}
        <Link to={getUrl(location, sector)}>{sector.attributes?.name}</Link>
      </Header>
      <Content>
        <Swiper
          key={mounted ? 'virtual' : 'non-virtual'}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          initialSlide={imageIndex}
          modules={swiperModules}
          keyboard={{ enabled: true }}
          virtual={virtual}
          className="w-full h-full"
          onSlideChange={onSlideChange}
          onSwiper={onSwiperReady}
        >
          {images?.map((image, i) => {
            const ii = imageIndex
            const isActive = !mounted || i === ii
            const isVisible = !mounted || (i >= ii - 1 && i <= ii + 1)
            const cached = isVisible ? cache.current[image.id!] : undefined
            return (
              <SwiperSlide
                key={image.id}
                virtualIndex={i}
                className="flex flex-col"
              >
                <Title>{image.attributes?.name}</Title>
                {isVisible && (
                  <>
                    <PaperImage
                      className="w-full aspect-video bg-slate-800"
                      image={image}
                      route={isActive ? route : null}
                      data={cached?.data}
                    />
                    <RouteList>
                      {cached?.routes?.map((r) => (
                        <RouteListItem
                          key={r.id}
                          route={r}
                          to={getUrl(location, sector, image, r)}
                          active={isActive && route?.id === r.id}
                        />
                      ))}
                    </RouteList>
                  </>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Content>
    </Main>
  )
}
