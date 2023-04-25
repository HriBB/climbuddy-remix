import { useCallback, useRef } from 'react'
import { StoreApi } from 'zustand'
import { SvgImageState } from '../store'
import { useImageSlider } from './useImageSlider'

const zoomRatio = 1.1

export const useMouse = (store: StoreApi<SvgImageState>) => {
  const down = useRef(false)
  const { setLocked } = useImageSlider()

  const handleDown = useCallback<React.MouseEventHandler>((e) => {
    down.current = true
  }, [])

  const handleMove = useCallback<React.MouseEventHandler>(
    (e) => {
      if (down.current) {
        const state = store.getState()
        const x = state.x + e.movementX
        const y = state.y + e.movementY
        state.setXY(x, y)
      }
    },
    [store]
  )

  const handleUp = useCallback<React.MouseEventHandler>((e) => {
    down.current = false
  }, [])

  const handleWheel = useCallback<React.WheelEventHandler>(
    (e) => {
      const { zoom, setZoom } = store.getState()
      const newZoom = e.deltaY > 0 ? zoom / zoomRatio : zoom * zoomRatio
      setZoom(newZoom)
      setLocked(true)
    },
    [store, setLocked]
  )

  return {
    handleDown,
    handleMove,
    handleUp,
    handleWheel,
  }
}
