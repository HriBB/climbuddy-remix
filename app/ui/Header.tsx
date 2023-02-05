import clsx from 'clsx'

type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

export const Header = ({ children, className, ...props }: Props) => (
  <header className={clsx('p-4', className)} {...props}>
    {children}
  </header>
)
