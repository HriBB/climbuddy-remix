import clsx from 'clsx'
import { useContext } from 'react'
import { FullScreenContext } from './FullScreenContext'

export type ImageToolbarProps = React.ComponentProps<'div'>

export const ImageToolbar = ({
  children,
  className,
  ...props
}: ImageToolbarProps) => {
  const fs = useContext(FullScreenContext)
  return (
    <div
      className={clsx(
        'absolute flex gap-2 items-center z-10 bottom-0 right-0 p-2',
        fs.active ? 'left-0' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
