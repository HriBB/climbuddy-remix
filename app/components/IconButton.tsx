import clsx from 'clsx'
import { forwardRef } from 'react'

export type IconButtonProps = React.ComponentPropsWithRef<'button'>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ children, className, ...props }, forwardedRef) {
    return (
      <button
        ref={forwardedRef}
        className={clsx('w-16 h-8 bg-white text-xs shadow', className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
