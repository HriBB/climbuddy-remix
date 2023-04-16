import clsx from 'clsx'
import { useFullScreen } from '../fullscreen'

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
        'absolute bottom-0 right-0 z-10',
        'flex items-center justify-end h-14 md:h-16 pl-4 pr-1',
        fullScreen.active ? 'left-0 text-white' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
