import { ImageFragment } from '~/types'

type Size = 'thumbnail' | 'small' | 'medium' | 'large' | 'full'

export const getImageSrc = (image: ImageFragment, size: Size = 'large') =>
  (size = 'full'
    ? image.attributes?.file?.data?.attributes?.fullUrl
    : image.attributes?.file?.data?.attributes?.formats[size].fullUrl)
