import { useContext } from 'react'
import { FullScreenContext } from './FullScreenContext'

export const useFullScreen = () => {
  const context = useContext(FullScreenContext)
  if (context === undefined) {
    throw new Error('useFullScreen must be used within a FullScreenProvider')
  }
  return context
}
