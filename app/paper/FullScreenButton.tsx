import { FullScreenHandle } from 'react-full-screen'
import { IconButton, IconButtonProps } from '~/ui'

type Props = IconButtonProps & {
  fullScreen: FullScreenHandle
}

export const FullScreenButton = ({ fullScreen, ...props }: Props) => {
  return (
    <IconButton onClick={fullScreen.enter} {...props}>
      fullscreen
    </IconButton>
  )
}
