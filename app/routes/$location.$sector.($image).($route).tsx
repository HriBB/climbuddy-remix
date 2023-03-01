import { useCallback, useEffect, useMemo, useRef } from 'react'

import { json, LoaderArgs } from '@remix-run/node'
import { Link, NavLink, useLoaderData, useNavigate } from '@remix-run/react'
import type { ShouldRevalidateFunction } from '@remix-run/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Virtual, Keyboard } from 'swiper'

import { execute } from '~/data.server'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { Content, Header, List, ListItem, Main, Title } from '~/ui'
import { SvgImage } from '~/paper'
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
const virtualOptions = { enabled: true, addSlidesBefore: 1, addSlidesAfter: 1 }

export default function SectorImagePage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image } = useLoaderData<typeof loader>()

  const imageIndex = useImageIndex({ sector, image })
  const route = useImageRoute({ image })
  const cache = useImageCache({ image })
  const mounted = useMounted()

  const swiperRef = useRef<SwiperType | null>(null)
  const imageRef = useRef<ImageItemFragment | null | undefined>(image)
  const virtual = useMemo(() => (mounted ? virtualOptions : false), [mounted])
  const images = mounted ? sector?.attributes?.images?.data : [image]
  const navigate = useNavigate()
  const onSwiper = useCallback(
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
    <Main className="fixed w-full h-full">
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={getUrl(location)}>{location.attributes?.name}</Link> &gt;{' '}
        <Link to={getUrl(location, sector)}>{sector.attributes?.name}</Link>
      </Header>
      <Content className="flex-1">
        <Swiper
          key={mounted ? 'virtual' : 'non-virtual'}
          className="w-full h-full"
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          initialSlide={imageIndex}
          modules={swiperModules}
          keyboard={{ enabled: true }}
          virtual={virtual}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          {images?.map((image, i) => {
            const ii = imageIndex
            const isActive = !mounted || i === ii
            const isVisible = !mounted || (i >= ii - 1 && i <= ii + 1)
            const cached = isVisible ? cache.current[image.id!] : undefined
            return (
              <SwiperSlide
                className="flex flex-col"
                key={image.id}
                virtualIndex={i}
              >
                <Title>{image.attributes?.name}</Title>
                {isVisible && (
                  <div className="flex flex-1 flex-col md:flex-row-reverse">
                    <div className="relative aspect-video md:aspect-auto md:flex-1 bg-slate-800">
                      <SvgImage
                        className="absolute top-0 left-0 right-0 bottom-0"
                        image={image}
                        route={isActive ? route : null}
                        data={cached?.data}
                      />
                    </div>
                    <div className="swiper-no-swiping relative flex-1 md:flex-none md:w-[250px]">
                      <List className="absolute top-0 left-0 right-0 bottom-0 overflow-auto">
                        {cached?.routes?.map((r) => {
                          const isActiveRoute = isActive && route?.id === r.id
                          const grade = r.attributes?.grade
                          return (
                            <ListItem key={r.id}>
                              <NavLink
                                className={isActiveRoute ? 'bg-slate-200' : ''}
                                to={getUrl(location, sector, image, r)}
                              >
                                {r.attributes?.name}
                                {grade && `, ${grade.data?.attributes?.grade}`}
                                {r.attributes?.sitstart && ', ss'}
                              </NavLink>
                            </ListItem>
                          )
                        })}
                      </List>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Content>
    </Main>
  )
}
