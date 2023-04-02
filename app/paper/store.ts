import { createStore } from 'zustand'

export interface SvgImageState {
  x: number
  y: number
  zoom: number
  loaded: boolean
  setXY: (x: number, y: number) => void
  setZoom: (zoom: number) => void
  setLoaded: (loaded: boolean) => void
}

export const createSvgImageStore = () =>
  createStore<SvgImageState>()((set) => ({
    x: 0,
    y: 0,
    zoom: 1,
    loaded: false,
    setXY: (x, y) => set(() => ({ x, y })),
    setZoom: (zoom) => set(() => ({ zoom })),
    setLoaded: (loaded) => set(() => ({ loaded })),
  }))
