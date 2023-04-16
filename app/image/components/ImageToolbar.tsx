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
        'absolute flex items-center justify-end h-14 md:h-16 z-10 bottom-0 left-0 right-0 pl-4 pr-2',
        fullScreen.active ? 'left-0 text-white' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
