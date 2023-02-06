import clsx from 'clsx'

type Props = React.ComponentProps<'ol'> & {
  children: React.ReactNode
}

export const List = ({ children, className, ...props }: Props) => (
  <ol className={clsx('m-0 px-4', className)} {...props}>
    {children}
  </ol>
)
