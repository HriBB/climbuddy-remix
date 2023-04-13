import clsx from 'clsx'
import { useFullScreen } from './FullScreenContext'

export type ImageToolbarProps = React.ComponentProps<'div'>

export const ImageToolbar = ({
  children,
  className,
  ...props
}: ImageToolbarProps) => {
  const fullScreen = useFullScreen()
  return (
    <div
      className={clsx(
        'absolute flex gap-2 items-center justify-end z-10 bottom-0 right-0 p-4',
        fullScreen.active ? 'left-0' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
