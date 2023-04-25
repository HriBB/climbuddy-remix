import { Fragment, useCallback } from 'react'
import { useNavigate } from '@remix-run/react'
import { useStore } from 'zustand'
import useConstant from 'use-constant'
import clsx from 'clsx'
import { getUrl } from '~/location'
import { getImageSrc } from '../getImageSrc'
import { useFullScreen } from '../fullscreen'
import { createSvgImageStore } from '../store'
import { useImageSlider, useMouse, useTouch } from '../hooks'
import { ImageSize } from '../size'
import { ImageData } from '../types'
import {
  ImageItemFragment,
  LocationFragment,
  RouteItemFragment,
  SectorFragment,
} from '~/types'

type Props = {
  className?: string
  imageSize: ImageSize
  location: LocationFragment
  sector: SectorFragment
  image: ImageItemFragment
  route?: RouteItemFragment | null
  routes?: RouteItemFragment[]
  data?: ImageData | null
}

export const SvgImage = ({
  className,
  imageSize,
  location,
  sector,
  image,
  route,
  routes,
  data,
}: Props) => {
  const navigate = useNavigate()
  const fullScreen = useFullScreen()
  const store = useConstant(() => createSvgImageStore())
  const state = useStore(store)
  const mouse = useMouse(store)
  const touch = useTouch(store)
  const slider = useImageSlider()

  const src = getImageSrc(image, imageSize)
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!

  const { x, y, zoom, hover } = state

  const handleRouteClick = useCallback<React.MouseEventHandler<SVGGElement>>(
    (e) => {
      const id = e.currentTarget.dataset.id
      const route = routes?.find((r) => r.id === id)
      if (route) {
        navigate(getUrl(location, sector, image, route))
      }
    },
    [location, sector, image, routes, navigate]
  )

  const handleDoubleClick = useCallback<React.MouseEventHandler>(() => {
    store.getState().reset()
    slider.setLocked(false)
  }, [store, slider])

  return (
    <div
      className={clsx(
        'relative',
        fullScreen.active
          ? 'flex-1 bg-slate-900'
          : 'aspect-video md:aspect-auto md:flex-1 bg-slate-200 dark:bg-slate-900',
        className
      )}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
        onDoubleClick={slider.locked ? handleDoubleClick : undefined}
      >
        <svg
          className={clsx('w-full h-full mx-auto')}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{
            transform: `translate3d(${x}px,${y}px,0) scale3d(${zoom},${zoom},1)`,
          }}
          onWheel={mouse.handleWheel}
          onMouseDown={slider.locked ? mouse.handleDown : undefined}
          onMouseMove={slider.locked ? mouse.handleMove : undefined}
          onMouseUp={slider.locked ? mouse.handleUp : undefined}
          onTouchStart={touch.handleStart}
          onTouchMove={slider.locked ? touch.handleMove : undefined}
          onTouchEnd={slider.locked ? touch.handleEnd : undefined}
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
                    onClick={handleRouteClick}
                    data-id={id}
                  >
                    {items.map((item) =>
                      item.type === 'Circle' && !selected ? null : (
                        <Fragment key={item.id}>
                          <path
                            d={item.pathData}
                            stroke={
                              selected
                                ? 'red'
                                : hover === id
                                ? 'yellow'
                                : 'black'
                            }
                            strokeWidth={2 / zoom}
                            vectorEffect="non-scaling-stroke"
                          />
                          <path
                            data-id={id}
                            d={item.pathData}
                            stroke="rgba(0,0,0,0)"
                            strokeWidth={20 / zoom}
                            vectorEffect="non-scaling-stroke"
                            onMouseEnter={state.onMouseEnter}
                            onMouseLeave={state.onMouseLeave}
                          />
                        </Fragment>
                      )
                    )}
                  </g>
                )
              })}
        </svg>
      </div>
    </div>
  )
}
