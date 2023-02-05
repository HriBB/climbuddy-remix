import clsx from 'clsx'

type Props = React.ComponentProps<'ol'> & {
  children: React.ReactNode
}

export const List = ({ children, className, ...props }: Props) => (
  <ol className={clsx('mt-0 mb-4 p-4', className)} {...props}>
    {children}
  </ol>
)
