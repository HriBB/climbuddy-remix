import clsx from 'clsx'
import { forwardRef } from 'react'

export type IconButtonProps = React.ComponentPropsWithRef<'button'>

export const IconButtonStyles = 'flex items-center justify-center w-12 h-12'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ children, className, ...props }, forwardedRef) {
    return (
      <button
        ref={forwardedRef}
        className={clsx(IconButtonStyles, className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
