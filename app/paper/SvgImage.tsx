import clsx from 'clsx'
import { useCallback, useRef, useState } from 'react'
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

const zoomRatio = 1.1
const strokeWidth = 2

const getDistance = (e: React.TouchEvent) =>
  Math.hypot(
    e.touches[0].pageX - e.touches[1].pageX,
    e.touches[0].pageY - e.touches[1].pageY
  )

const getCenter = (e: React.TouchEvent) => ({
  x: (e.touches[0].pageX + e.touches[1].pageX) / 2,
  y: (e.touches[0].pageY + e.touches[1].pageY) / 2,
})

export const SvgImage = ({ className, image, route, data }: Props) => {
  const src = getImageSrc(image, 'large')
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!

  const [zoom, setZoom] = useState(1)
  const zoomRef = useRef(1)

  const [{ x, y }, setXY] = useState({ x: 0, y: 0 })
  const xyRef = useRef({ x: 0, y: 0 })

  const handleWheel = useCallback<React.WheelEventHandler>(
    (e) => {
      const newZoom = e.deltaY > 0 ? zoom / zoomRatio : zoom * zoomRatio
      setZoom(newZoom)
      zoomRef.current = newZoom
    },
    [zoom]
  )

  const mouseDown = useRef(false)
  const handleMouseDown = useCallback<React.MouseEventHandler>((e) => {
    mouseDown.current = true
  }, [])
  const handleMouseMove = useCallback<React.MouseEventHandler>((e) => {
    if (mouseDown.current) {
      const x = xyRef.current.x + e.movementX
      const y = xyRef.current.y + e.movementY
      setXY({ x, y })
      xyRef.current = { x, y }
    }
  }, [])
  const handleMouseUp = useCallback<React.MouseEventHandler>((e) => {
    mouseDown.current = false
  }, [])

  type Point = { x: number; y: number }

  const touches = useRef<React.TouchList | null>(null)
  const startXY = useRef<Point | null>(null)
  const startZoom = useRef(1)
  const distance = useRef(0)
  const center = useRef<Point | null>(null)

  const handleTouchStart = useCallback<React.TouchEventHandler>((e) => {
    if (e.touches.length === 1 || e.touches.length === 2) {
      startXY.current = xyRef.current
      startZoom.current = zoomRef.current
      touches.current = e.touches
    }
    if (e.touches.length === 2) {
      distance.current = getDistance(e)
      center.current = getCenter(e)
    }
  }, [])
  const handleTouchMove = useCallback<React.TouchEventHandler>((e) => {
    if (touches.current?.length === 1 && startXY.current) {
      const dx = e.touches[0].pageX - touches.current[0].pageX
      const dy = e.touches[0].pageY - touches.current[0].pageY
      const x = startXY.current.x + dx
      const y = startXY.current.y + dy
      setXY({ x, y })
      xyRef.current = { x, y }
    }
    if (touches.current?.length === 2 && center.current && startXY.current) {
      const nextCenter = getCenter(e)
      const dx = nextCenter.x - center.current.x
      const dy = nextCenter.y - center.current.y
      const x = startXY.current.x + dx
      const y = startXY.current.y + dy
      setXY({ x, y })
      xyRef.current = { x, y }

      const nextDistance = getDistance(e)
      const zoom = startZoom.current * (nextDistance / distance.current)
      setZoom(zoom)
      zoomRef.current = zoom
    }
  }, [])
  const handleTouchEnd = useCallback<React.TouchEventHandler>(() => {
    touches.current = null
    startXY.current = null
    startZoom.current = 0
    distance.current = 0
    center.current = null
  }, [])

  return (
    <div className={clsx('overflow-hidden', className)}>
      <svg
        className="w-full h-full mx-auto"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          transform: `translate3d(${x}px,${y}px,0) scale3d(${zoom},${zoom},1)`,
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                  strokeWidth={strokeWidth / zoom}
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
