import { useMemo } from 'react'
import { ImageFragment, SectorFragment } from '~/types'

type Props = {
  sector: SectorFragment
  image: ImageFragment
}

export const useImageIndex = ({ sector, image }: Props) =>
  useMemo(
    () =>
      sector?.attributes?.images?.data.findIndex(
        (i) => i.attributes?.slug === image.attributes?.slug
      ) || 0,
    [image.attributes?.slug, sector?.attributes?.images?.data]
  )
