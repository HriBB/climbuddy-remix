import clsx from 'clsx'

export type IconButtonProps = React.ComponentProps<'button'>

export const IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => (
  <button className={clsx('w-16 h-8 bg-white text-xs', className)} {...props}>
    {children}
  </button>
)
