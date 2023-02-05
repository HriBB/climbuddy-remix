import { useCallback } from 'react'
import { useStore } from 'zustand'
import useMeasure from 'react-use-measure'
import { ImageEntity, RouteEntity } from '~/types'
import { ImageData } from './types'
import { useCreateSvgStore } from './store'
import clsx from 'clsx'

type Props = {
  className?: string
  image: ImageEntity
  route?: RouteEntity | null
}

export const SVGViewer = ({ className, image }: Props) => {
  const store = useCreateSvgStore({ image })
  const { x, y, zoom, imageLoaded, setImage, setSize } = useStore(store)
  const [boxRef, box] = useMeasure()

  const file = image.attributes?.file?.data
  const src = file?.attributes?.fullUrl!
  const alt = image.attributes?.name
  const width = file?.attributes?.width!
  const height = file?.attributes?.height!
  const data: ImageData = image.attributes?.svg
  const strokeWidth = Math.round((1 / zoom) * 2)

  const onImageLoad = useCallback(() => {
    // calculate next zoom
    const wr = box.width / width
    const hr = box.height / height
    const zoom = wr < hr ? wr : hr
    // calculate next image size
    const nw = Math.round(width * zoom)
    const nh = Math.round(height * zoom)
    // calculate needed translation xy
    const tx = (box.width - nw) / 2
    const ty = (box.height - nh) / 2
    // calculate next xy
    const nx = x + tx
    const ny = y + ty
    setImage(image)
    setSize(nx, ny, zoom)
  }, [box.width, box.height, width, height, x, y, image, setImage, setSize])

  return (
    <div ref={boxRef} className={clsx('relative overflow-hidden', className)}>
      {!imageLoaded && (
        <img className="max-w-full max-h-full mx-auto" src={src} alt={alt} />
      )}
      {box.width > 0 && box.height > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            opacity: imageLoaded ? 1 : 0,
            transform: `translate3d(${x}px,${y}px,0) scale3d(${zoom},${zoom},1)`,
            transformOrigin: '0 0',
          }}
        >
          <img
            className="absolute top-0 left-0"
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={onImageLoad}
          />
          <svg className="absolute top-0 left-0" width={width} height={height}>
            <g>
              {data &&
                Object.keys(data).map((routeId) => {
                  const items = data[routeId]
                  if (!items || !items.length) return null
                  return (
                    <g
                      key={routeId}
                      fill={'none'}
                      stroke={'#000000'}
                      strokeWidth={strokeWidth}
                    >
                      {items.map((item) => (
                        <path key={item.id} d={item.pathData} />
                      ))}
                    </g>
                  )
                })}
            </g>
          </svg>
        </div>
      )}
    </div>
  )
}

export default SVGViewer
