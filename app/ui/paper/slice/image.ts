import { StateCreator } from 'zustand'
import { ImageEntity, RouteEntity } from '~/types'

export interface ImageSlice {
  image: ImageEntity
  imageLoaded: boolean
  imageLoading: boolean
  fullscreen: boolean
  selectedRoute?: RouteEntity | null
  setImage: (image: ImageEntity) => void
  resetImage: () => void
  setImageLoaded: (imageLoaded: boolean) => void
  setImageLoading: (imageLoading: boolean) => void
  setFullscreen: (fullscreen: boolean) => void
  setSelectedRoute: (route?: RouteEntity | null) => void
}

export type ImageSliceProps = {
  image: ImageEntity
  selectedRoute?: RouteEntity | null
}

export type CreateImageSlice = StateCreator<ImageSlice, [], [], ImageSlice>

export const createImageSlice =
  ({ image, selectedRoute }: ImageSliceProps): CreateImageSlice =>
  (set) => ({
    image: Object.assign({}, image),
    imageLoaded: false,
    imageLoading: false,
    fullscreen: false,
    selectedRoute,
    setImage: (image) =>
      set(() => ({
        image: Object.assign({}, image),
        imageLoaded: true,
        history: [Object.assign({}, image)],
        historyIndex: 0,
      })),
    resetImage: () =>
      set((state) => ({
        image: state.image,
        imageLoaded: true,
        history: [state.image],
        historyIndex: 0,
      })),
    setImageLoaded: (imageLoaded) => set(() => ({ imageLoaded })),
    setImageLoading: (imageLoading) => set(() => ({ imageLoading })),
    setFullscreen: (fullscreen) => set(() => ({ fullscreen })),
    setSelectedRoute: (selectedRoute) => set(() => ({ selectedRoute })),
  })
