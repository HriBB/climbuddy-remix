import { useNavigation } from '@remix-run/react'
import { useRootData } from '~/root'
import { ImageSize } from './types'

export const useImageSize = (): ImageSize => {
  const data = useRootData()
  const navigation = useNavigation()
  const optimisticTheme = navigation.formData?.has('imageSize')
    ? (navigation.formData.get('imageSize') as ImageSize)
    : null
  return optimisticTheme || data.imageSize
}
