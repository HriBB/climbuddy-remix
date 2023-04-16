import { IconButton, IconButtonProps } from '~/components'
import { MaximizeIcon, MinimizeIcon } from '~/components/icons'
import { useFullScreen } from './useFullScreen'

type Props = IconButtonProps

export const FullScreenButton = (props: Props) => {
  const { active, enter, exit } = useFullScreen()
  return (
    <IconButton onClick={active ? exit : enter} {...props}>
      {active ? <MinimizeIcon /> : <MaximizeIcon />}
    </IconButton>
  )
}
