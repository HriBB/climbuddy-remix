import { MoonIcon, SettingsIcon, SunIcon } from '~/components/icons'
import { Theme } from './types'

export const LightIcon = SunIcon
export const DarkIcon = MoonIcon
export const SystemIcon = SettingsIcon

export const icons = {
  [Theme.LIGHT]: SunIcon,
  [Theme.DARK]: MoonIcon,
  [Theme.SYSTEM]: SettingsIcon,
}
