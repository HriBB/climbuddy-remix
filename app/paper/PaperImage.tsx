import { ImageEntity, RouteEntity } from '~/types'
import clsx from 'clsx'

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

export const PaperImage = ({ className, image, route, data }: Props) => {
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!
  const strokeWidth = 8

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <svg
        className="w-auto h-full mx-auto"
        width={width}
        height={height}
        viewBox={`0, 0, ${width} ${height}`}
      >
        <image width={width} height={height} href={file?.attributes?.fullUrl} />
        {data &&
          Object.keys(data).map((routeId) => {
            const items = data[routeId]
            if (!items || !items.length) return null
            const selected = route && route.id === routeId

            return (
              <g
                key={routeId}
                fill={'none'}
                stroke={selected ? 'red' : 'black'}
                strokeWidth={strokeWidth}
                onClick={() => {
                  console.log('click on', routeId)
                }}
              >
                {items.map((item) =>
                  item.type === 'Circle' && !selected ? null : (
                    <path key={item.id} d={item.pathData} />
                  )
                )}
              </g>
            )
          })}
      </svg>
    </div>
  )
}
