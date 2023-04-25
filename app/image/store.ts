import { createStore } from 'zustand'

export interface SvgImageState {
  x: number
  y: number
  zoom: number
  loaded: boolean
  hover: string | undefined
  setXY: (x: number, y: number) => void
  setZoom: (zoom: number) => void
  setLoaded: (loaded: boolean) => void
  onMouseEnter: (e: React.MouseEvent<SVGPathElement>) => void
  onMouseLeave: (e: React.MouseEvent<SVGPathElement>) => void
  reset: () => void
}

const initialState = {
  x: 0,
  y: 0,
  zoom: 1,
  loaded: false,
  hover: undefined,
}

export const createSvgImageStore = () =>
  createStore<SvgImageState>()((set) => ({
    ...initialState,
    setXY: (x, y) => set(() => ({ x, y })),
    setZoom: (zoom) => set(() => ({ zoom })),
    setLoaded: (loaded) => set(() => ({ loaded })),
    onMouseEnter: (e) => set(() => ({ hover: e.currentTarget.dataset.id })),
    onMouseLeave: () => set(() => ({ hover: undefined })),
    reset: () => set(() => ({ ...initialState })),
  }))
