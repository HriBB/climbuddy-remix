import { Title, TitleProps } from '~/components'
import { useFullScreen } from './FullScreenContext'

export type ImageTitleProps = TitleProps

export const ImageTitle = ({ children, ...props }: ImageTitleProps) => {
  const fullScreen = useFullScreen()
  return (
    <Title
      className={
        fullScreen.active
          ? 'absolute top-0 left-0 right-0 z-50 text-white'
          : 'text-black'
      }
      {...props}
    >
      {children}
    </Title>
  )
}
