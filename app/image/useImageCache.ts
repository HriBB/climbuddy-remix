import { useRef } from 'react'
import { ImageFragment, RouteItemFragment } from '~/types'
import { ImageData } from './types'

export type CacheItem = {
  routes: RouteItemFragment[]
  data: ImageData
}

export type Cache = {
  [key: string]: CacheItem
}

type Props = {
  image: ImageFragment
}

export const useImageCache = ({ image }: Props) => {
  const cache = useRef<Cache>({})

  const prevImage = image.attributes?.prevImage?.data
  const nextImage = image.attributes?.nextImage?.data

  if (!cache.current[image.id!]) {
    cache.current[image.id!] = {
      routes: image.attributes?.routes?.data || [],
      data: image.attributes?.svg,
    }
  }
  if (prevImage && !cache.current[prevImage.id!]) {
    cache.current[prevImage.id!] = {
      routes: prevImage.attributes?.routes?.data || [],
      data: prevImage.attributes?.svg,
    }
  }
  if (nextImage && !cache.current[nextImage.id!]) {
    cache.current[nextImage.id!] = {
      routes: nextImage.attributes?.routes?.data || [],
      data: nextImage.attributes?.svg,
    }
  }

  return cache
}
