import { getImageSrc } from '~/image'
import { ImageEntity, RouteEntity } from '~/types'

export enum ItemName {
  Circle = 'Circle',
  Path = 'Path',
}

export type Point = {
  x: number
  y: number
}

export type Segment = {
  handleIn: Point
  handleOut: Point
  point: Point
}

export type Item = {
  id: string
  type: string
  pathData?: string
  segments?: Segment[]
}

export type ItemData = {
  id?: string
  type?: string
  pathData?: string
  segments?: Segment[]
}

export type ImageData = { [routeId: string]: Item[] }

type Props = {
  className?: string
  image: ImageEntity
  route?: RouteEntity | null
  data?: ImageData | null
}

export const SvgImage = ({ className, image, route, data }: Props) => {
  const src = getImageSrc(image)
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!

  return (
    <div className={className}>
      <svg
        className="w-full h-full mx-auto"
        width={width}
        height={height}
        viewBox={`0, 0, ${width} ${height}`}
      >
        <image width={width} height={height} href={src} />
        {data &&
          Object.keys(data)
            .sort((id) => (route && route.id === id ? 1 : -1))
            .map((id) => {
              const items = data[id]
              if (!items || !items.length) return null
              const selected = route && route.id === id
              return (
                <g
                  key={id}
                  fill="none"
                  stroke={selected ? 'red' : 'black'}
                  strokeWidth={2}
                >
                  {items.map((item) =>
                    item.type === 'Circle' && !selected ? null : (
                      <path
                        key={item.id}
                        d={item.pathData}
                        vectorEffect="non-scaling-stroke"
                      />
                    )
                  )}
                </g>
              )
            })}
      </svg>
    </div>
  )
}
