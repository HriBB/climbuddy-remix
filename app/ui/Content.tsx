import clsx from 'clsx'

type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

export const Content = ({ children, className, ...props }: Props) => (
  <div className={clsx('flex-1 border border-blue-600', className)} {...props}>
    {children}
  </div>
)
