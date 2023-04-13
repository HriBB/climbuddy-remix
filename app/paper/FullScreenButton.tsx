import { IconButton, IconButtonProps } from '~/ui'
import { FullScreenContext } from './FullScreenContext'
import { useContext } from 'react'

type Props = IconButtonProps

export const FullScreenButton = (props: Props) => {
  const { active, enter, exit } = useContext(FullScreenContext)
  return (
    <IconButton onClick={active ? exit : enter} {...props}>
      fullscreen
    </IconButton>
  )
}
