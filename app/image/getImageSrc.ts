import { ImageFragment } from '~/types'

type Size = 'thumbnail' | 'small' | 'medium' | 'large' | 'full'

export const getImageSrc = (image: ImageFragment, size: Size = 'large') => {
  const file = image.attributes?.file?.data
  if (size) {
    return file?.attributes?.formats[size].fullUrl
  } else {
    return file?.attributes?.fullUrl
  }
}
