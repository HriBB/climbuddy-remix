import { createContext, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import useConstant from 'use-constant'
import {
  createImageSlice,
  ImageSlice,
  ImageSliceProps,
  createSizeSlice,
  SizeSlice,
  SizeSliceProps,
} from './slice'

export interface SvgInitProps extends SizeSliceProps, ImageSliceProps {}
export interface SvgState extends SizeSlice, ImageSlice {}
export interface SvgStore extends StoreApi<SvgState> {}
export const SvgContext = createContext<SvgStore>(undefined!)

export const createSvgStore = (props: SvgInitProps) => {
  return createStore<SvgState>()((...a) => ({
    ...createImageSlice(props)(...a),
    ...createSizeSlice(props)(...a),
  }))
}

export const useCreateSvgStore = (props: SvgInitProps) =>
  useConstant(() => createSvgStore(props))

export const useSvgStore = <StateSlice,>(
  selector: (state: SvgState) => StateSlice
) => {
  const store = useContext(SvgContext)
  if (!store) throw new Error('Missing SvgContext!')
  return useStore(store, selector)
}
