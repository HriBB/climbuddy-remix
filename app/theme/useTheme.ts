import { useNavigation } from '@remix-run/react'
import { useRootData } from '~/root'
import { Theme } from './types'

export const useTheme = (): Theme => {
  const data = useRootData()
  const navigation = useNavigation()
  const optimisticTheme = navigation.formData?.has('theme')
    ? (navigation.formData.get('theme') as Theme)
    : null
  return optimisticTheme || data.theme
}
