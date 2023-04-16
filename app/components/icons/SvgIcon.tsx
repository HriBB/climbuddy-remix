import clsx from 'clsx'

export const SvgIcon = ({
  className,
  children,
  ...props
}: React.ComponentProps<'svg'>) => (
  <svg
    className={clsx('w-6 h6', className)}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
)
