import clsx from 'clsx'

export type MainProps = React.ComponentProps<'div'>

export const Main = ({ children, className, ...props }: MainProps) => (
  <div className={clsx('flex flex-col', className)} {...props}>
    {children}
  </div>
)
