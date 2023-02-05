import { StateCreator } from 'zustand'

export interface SizeSlice {
  x: number
  y: number
  zoom: number
  setSize: (x: number, y: number, zoom: number) => void
}

export type SizeSliceProps = {
  x?: number
  y?: number
  zoom?: number
}

export type CreateSizeSlice = StateCreator<SizeSlice, [], [], SizeSlice>

export const createSizeSlice =
  ({ x, y, zoom }: SizeSliceProps): CreateSizeSlice =>
  (set) => ({
    x: x || 0,
    y: y || 0,
    zoom: zoom || 1,
    setSize: (x, y, zoom) => set(() => ({ x, y, zoom })),
  })
