import { createContext, useContext } from 'react'
import { FullScreenHandle } from 'react-full-screen'

export const FullScreenContext = createContext<FullScreenHandle>(undefined!)

export const useFullScreen = () => useContext(FullScreenContext)
