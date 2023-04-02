import clsx from 'clsx'
import useConstant from 'use-constant'
import { useStore } from 'zustand'
import { ImageSize, getImageSrc } from '~/image'
import { ImageEntity, RouteEntity } from '~/types'
import { createSvgImageStore } from './store'
import { useMouse } from './useMouse'
import { useTouch } from './useTouch'
import { useEffect } from 'react'

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
  imageSize: keyof typeof ImageSize
  image: ImageEntity
  route?: RouteEntity | null
  data?: ImageData | null
}

const strokeWidth = 2

export const SvgImage = ({
  className,
  imageSize,
  image,
  route,
  data,
}: Props) => {
  const store = useConstant(() => createSvgImageStore())
  const state = useStore(store)
  const mouse = useMouse(store)
  const touch = useTouch(store)

  const src = getImageSrc(image, imageSize)
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!

  const { x, y, zoom, loaded } = state

  useEffect(() => {
    const img = new Image()
    img.src = src
    if (img.complete) {
      const { loaded, setLoaded } = store.getState()
      if (!loaded) setLoaded(true)
    } else {
      img.onload = () => {
        const { loaded, setLoaded } = store.getState()
        if (!loaded) setLoaded(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store])

  return (
    <div className={clsx('overflow-hidden', className)}>
      <svg
        className={clsx('w-full h-full mx-auto', !loaded && 'opacity-0')}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          transform: `translate3d(${x}px,${y}px,0) scale3d(${zoom},${zoom},1)`,
        }}
        onWheel={false ? mouse.handleWheel : undefined}
        onMouseDown={false ? mouse.handleDown : undefined}
        onMouseMove={false ? mouse.handleMove : undefined}
        onMouseUp={false ? mouse.handleUp : undefined}
        onTouchStart={false ? touch.handleStart : undefined}
        onTouchMove={false ? touch.handleMove : undefined}
        onTouchEnd={false ? touch.handleEnd : undefined}
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
