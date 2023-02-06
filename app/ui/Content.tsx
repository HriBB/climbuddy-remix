import clsx from 'clsx'

type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

export const Content = ({ children, className, ...props }: Props) => (
  <div className={clsx('flex-1 overflow-auto', className)} {...props}>
    {children}
  </div>
)
