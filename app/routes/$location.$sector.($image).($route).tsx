import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { json, LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData, useNavigate } from '@remix-run/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Virtual } from 'swiper'

import { execute } from '~/data.server'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'
import { Content, Header, Main, SVGViewer, Title } from '~/ui'
import {
  ImageDocument,
  ImageItemFragment,
  ImageQuery,
  ImageQueryVariables,
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
  return json({ image })
}

export default function SectorImagePage() {
  const navigate = useNavigate()
  const { location } = useLocationData()
  const { sector } = useSectorData()
  const { image } = useLoaderData<typeof loader>()
  const swiperRef = useRef<SwiperType | null>(null)
  const imageRef = useRef<ImageItemFragment | null | undefined>(image)
  const [mounted, setMounted] = useState(false)

  const images = mounted ? sector?.attributes?.images?.data : [image]
  const imageIndex = sector?.attributes?.images?.data.findIndex(
    (i) => i.attributes?.slug === image.attributes?.slug
  )

  const virtual = useMemo(
    () =>
      mounted
        ? {
            enabled: true,
            addSlidesBefore: 1,
            addSlidesAfter: 2,
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
      console.log('onSlideChange')
      const images = sector?.attributes?.images?.data || []
      const image = images[swiper.realIndex]
      if (image && image.id !== imageRef.current?.id) {
        imageRef.current = image
        const url = `/${location?.attributes?.slug}/${sector?.attributes?.slug}/${image.attributes?.slug}`
        console.log('====> navigate to', url)
        navigate(url, { replace: true })
      }
    },
    [
      location?.attributes?.slug,
      sector?.attributes?.slug,
      sector?.attributes?.images?.data,
      navigate,
    ]
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

  return (
    <Main>
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={`/${location.attributes?.slug}`}>
          {location.attributes?.name}
        </Link>{' '}
        &gt;{' '}
        <Link to={`/${location.attributes?.slug}/${sector.attributes?.slug}`}>
          {sector.attributes?.name}
        </Link>
      </Header>
      <Content>
        <Swiper
          key={mounted ? 'virtual' : 'non-virtual'}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={imageIndex}
          modules={[Virtual]}
          virtual={virtual}
          className="w-full h-full border border-red-500"
          onSlideChange={onSlideChange}
          onSwiper={onSwiperReady}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={image.id} virtualIndex={index}>
              <Title>{image.attributes?.name}</Title>
              <SVGViewer
                className="w-full aspect-video bg-slate-800"
                image={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Main>
  )
}
