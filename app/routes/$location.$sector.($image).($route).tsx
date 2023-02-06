import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { json, LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData, useNavigate } from '@remix-run/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Virtual } from 'swiper'

import { execute } from '~/data.server'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { Content, Header, List, ListItem, Main, Title } from '~/ui'
import { PaperImage, ImageData } from '~/paper'
import {
  ImageDocument,
  ImageItemFragment,
  ImageQuery,
  ImageQueryVariables,
  RouteEntity,
} from '~/types'

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

export default function SectorImagePage() {
  const navigate = useNavigate()
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image, route } = useLoaderData<typeof loader>()
  const swiperRef = useRef<SwiperType | null>(null)
  const imageRef = useRef<ImageItemFragment | null | undefined>(image)
  const [mounted, setMounted] = useState(false)

  const locationUrl = `/${location?.attributes?.slug}`
  const sectorUrl = `${locationUrl}/${sector?.attributes?.slug}`

  const images = mounted ? sector?.attributes?.images?.data : [image]
  const imageIndex =
    sector?.attributes?.images?.data.findIndex(
      (i) => i.attributes?.slug === image.attributes?.slug
    ) || 0

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

  const onSwiperReady = useCallback(
    (swiper: SwiperType) => (swiperRef.current = swiper),
    []
  )

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      console.log('onSlideChange', swiper.activeIndex, swiper.realIndex)
      const images = sector?.attributes?.images?.data || []
      const image = images[swiper.activeIndex]
      if (image && image.id !== imageRef.current?.id) {
        imageRef.current = image
        const url = `${sectorUrl}/${image.attributes?.slug}`
        console.log('====> navigate to', url)
        navigate(url, { replace: true })
      }
    },
    [sectorUrl, sector?.attributes?.images?.data, navigate]
  )

  useEffect(() => {
    if (image && image.id !== imageRef.current?.id) {
      console.log('useImageChangeEffect')
      const images = sector?.attributes?.images?.data || []
      const index = images.findIndex((i) => i.id === image.id)
      if (index > -1) {
        console.log('====> change slide because of history update to', index)
        imageRef.current = image
        swiperRef.current?.slideTo(index)
      }
    }
  }, [image, sector?.attributes?.images?.data])

  useEffect(() => setMounted(true), [])

  const prev = image.attributes?.prevImage?.data
  const next = image.attributes?.nextImage?.data

  type Cache = {
    routes: RouteEntity[]
    data: ImageData
  }
  const cache = useRef<{ [key: string]: Cache }>({})

  if (!cache.current[image.id!]) {
    cache.current[image.id!] = {
      routes: image.attributes?.routes?.data || [],
      data: image.attributes?.svg,
    }
  }
  if (prev && !cache.current[prev.id!]) {
    cache.current[prev.id!] = {
      routes: prev.attributes?.routes?.data || [],
      data: prev.attributes?.svg,
    }
  }
  if (next && !cache.current[next.id!]) {
    cache.current[next.id!] = {
      routes: next.attributes?.routes?.data || [],
      data: next.attributes?.svg,
    }
  }

  return (
    <Main>
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={locationUrl}>{location.attributes?.name}</Link> &gt;{' '}
        <Link to={sectorUrl}>{sector.attributes?.name}</Link>
      </Header>
      <Content>
        <Swiper
          key={mounted ? 'virtual' : 'non-virtual'}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          initialSlide={imageIndex}
          modules={[Virtual]}
          virtual={virtual}
          className="w-full h-full"
          onSlideChange={onSlideChange}
          onSwiper={onSwiperReady}
        >
          {images?.map((i, index) => {
            const imageUrl = `${sectorUrl}/${i.attributes?.slug}`
            const render = index >= imageIndex - 1 && index <= imageIndex + 1
            const slide = render ? cache.current[i.id!] : undefined
            return (
              <SwiperSlide
                key={i.id}
                virtualIndex={index}
                className="flex flex-col"
              >
                <Title>{i.attributes?.name}</Title>
                <PaperImage
                  className="w-full aspect-video bg-slate-800"
                  image={i}
                  route={route}
                  data={slide?.data}
                />
                {render && (
                  <div className="flex-1 overflow-x-hidden overflow-y-auto">
                    <List>
                      {slide?.routes?.map((r) => (
                        <ListItem key={r.id}>
                          <Link
                            className={route?.id === r.id ? 'bg-slate-200' : ''}
                            to={`${imageUrl}/${r.attributes?.slug}`}
                          >
                            {r.attributes?.name}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
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
