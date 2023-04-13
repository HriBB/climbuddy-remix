import { IconButton, IconButtonProps } from '~/components'
import { useFullScreen } from './FullScreenContext'

type Props = IconButtonProps

export const FullScreenButton = (props: Props) => {
  const { active, enter, exit } = useFullScreen()
  return (
    <IconButton onClick={active ? exit : enter} {...props}>
      fullscreen
    </IconButton>
  )
}
