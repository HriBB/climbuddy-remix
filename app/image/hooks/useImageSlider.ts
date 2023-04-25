import { create } from 'zustand'

export interface ImageSliderState {
  locked: boolean
  setLocked: (locked: boolean) => void
}

export const useImageSlider = create<ImageSliderState>()((set) => ({
  locked: false,
  setLocked: (locked) => set(() => ({ locked })),
}))
