import { useCallback, useRef } from 'react'
import { StoreApi } from 'zustand'
import { SvgImageState } from './store'

const getDistance = (e: React.TouchEvent) =>
  Math.hypot(
    e.touches[0].pageX - e.touches[1].pageX,
    e.touches[0].pageY - e.touches[1].pageY
  )

const getCenter = (e: React.TouchEvent) => ({
  x: (e.touches[0].pageX + e.touches[1].pageX) / 2,
  y: (e.touches[0].pageY + e.touches[1].pageY) / 2,
})

export const useTouch = (store: StoreApi<SvgImageState>) => {
  const touches = useRef<React.TouchList | null>(null)
  const start = useRef({ x: 0, y: 0, zoom: 1 })
  const center = useRef({ x: 0, y: 0 })
  const distance = useRef(0)

  const handleStart = useCallback<React.TouchEventHandler>(
    (e) => {
      if (e.touches.length === 1 || e.touches.length === 2) {
        const { x, y, zoom } = store.getState()
        start.current = { x, y, zoom }
        touches.current = e.touches
      }
      if (e.touches.length === 2) {
        distance.current = getDistance(e)
        center.current = getCenter(e)
      }
    },
    [store]
  )

  const handleMove = useCallback<React.TouchEventHandler>(
    (e) => {
      if (touches.current?.length === 1) {
        const state = store.getState()
        const dx = e.touches[0].pageX - touches.current[0].pageX
        const dy = e.touches[0].pageY - touches.current[0].pageY
        const x = start.current.x + dx
        const y = start.current.y + dy
        state.setXY(x, y)
      }
      if (touches.current?.length === 2) {
        const state = store.getState()
        const nextCenter = getCenter(e)
        const nextDistance = getDistance(e)
        const dx = nextCenter.x - center.current.x
        const dy = nextCenter.y - center.current.y
        const x = start.current.x + dx
        const y = start.current.y + dy
        const zoom = start.current.zoom * (nextDistance / distance.current)
        state.setXY(x, y)
        state.setZoom(zoom)
      }
    },
    [store]
  )

  const handleEnd = useCallback<React.TouchEventHandler>(() => {
    touches.current = null
  }, [])

  return {
    handleStart,
    handleMove,
    handleEnd,
  }
}
