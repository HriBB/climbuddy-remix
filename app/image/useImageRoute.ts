import { useMemo } from 'react'
import { useParams } from '@remix-run/react'
import { ImageFragment } from '~/types'

type Props = {
  image: ImageFragment
}

export const useImageRoute = ({ image }: Props) => {
  const { route } = useParams()
  return useMemo(
    () =>
      image.attributes?.routes?.data.find((r) => r.attributes?.slug === route),
    [image.attributes?.routes?.data, route]
  )
}
