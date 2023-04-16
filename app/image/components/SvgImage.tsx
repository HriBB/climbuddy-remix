import { Fragment, useCallback, useEffect } from 'react'
import { useNavigate } from '@remix-run/react'
import { useStore } from 'zustand'
import clsx from 'clsx'
import useConstant from 'use-constant'
import { getUrl } from '~/location'
import { getImageSrc } from '../getImageSrc'
import { useFullScreen } from '../fullscreen'
import { createSvgImageStore } from '../store'
import { useMouse, useTouch } from '../hooks'
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

  const src = getImageSrc(image, imageSize)
  const file = image.attributes?.file?.data
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!

  const { x, y, zoom, hover } = state

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

  return (
    <div
      className={clsx(
        'relative',
        fullScreen.active
          ? 'flex-1 bg-black'
          : 'aspect-video  md:aspect-auto md:flex-1 bg-slate-200 dark:bg-slate-900',
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <svg
          className={clsx('w-full h-full mx-auto' /*, !loaded && 'opacity-0'*/)}
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
