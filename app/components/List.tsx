import clsx from 'clsx'

export type ListProps = React.ComponentProps<'ol'>

export const List = ({ children, className, ...props }: ListProps) => (
  <ol className={clsx('m-0 p-4', className)} {...props}>
    {children}
  </ol>
)
