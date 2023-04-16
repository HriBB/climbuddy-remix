import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useNavigate } from '@remix-run/react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Virtual, Keyboard } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import { getUrl } from '~/location'
import {
  ImageFragment,
  ImageItemFragment,
  LocationFragment,
  SectorFragment,
} from '~/types'

export type ImageSliderProps = SwiperProps & {
  location: LocationFragment
  sector: SectorFragment
  image: ImageFragment
  imageIndex: number
  mounted: boolean
}

const swiperModules = [Virtual, Keyboard]
const virtualOptions = { enabled: true, addSlidesBefore: 1, addSlidesAfter: 1 }

export const ImageSlider = ({
  children,
  location,
  sector,
  image,
  imageIndex,
  mounted,
}: ImageSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const imageRef = useRef<ImageItemFragment | null | undefined>(image)
  const virtual = useMemo(() => (mounted ? virtualOptions : false), [mounted])

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
        navigate(getUrl(location, sector, image), {
          replace: true,
          state: { image },
        })
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
    <Swiper
      key={mounted ? 'virtual' : 'non-virtual'}
      className="flex-1 w-full h-full"
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      initialSlide={imageIndex}
      modules={swiperModules}
      keyboard={{ enabled: true }}
      virtual={virtual}
      touchStartPreventDefault={false}
      touchStartForcePreventDefault={false}
      preventClicks={false}
      preventClicksPropagation={false}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
    >
      {children}
    </Swiper>
  )
}
