import { createContext } from 'react'
import { FullScreenHandle } from 'react-full-screen'

export const FullScreenContext = createContext<FullScreenHandle>(undefined!)
