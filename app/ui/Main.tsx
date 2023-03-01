import clsx from 'clsx'

type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

export const Main = ({ children, className, ...props }: Props) => (
  <div className={clsx('flex flex-col', className)} {...props}>
    {children}
  </div>
)
