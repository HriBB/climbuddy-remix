import {
  LocationFragment,
  LocationItemFragment,
  SectorFragment,
  SectorItemFragment,
  ImageFragment,
  ImageItemFragment,
  RouteItemFragment,
} from '~/climbuddy/types'

type Args = (
  | LocationFragment
  | LocationItemFragment
  | SectorFragment
  | SectorItemFragment
  | ImageFragment
  | ImageItemFragment
  | RouteItemFragment
  | string
  | undefined
  | null
)[]

export const getUrl = (...args: Args) => {
  const parts: string[] = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (typeof arg === 'string') parts.push(arg)
    else if (arg?.attributes?.slug) parts.push(arg.attributes?.slug)
  }
  return '/' + parts.map((p) => encodeURIComponent(p)).join('/')
}
