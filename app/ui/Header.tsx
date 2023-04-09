import clsx from 'clsx'

export type HeaderProps = React.ComponentProps<'div'>

export const Header = ({ children, className, ...props }: HeaderProps) => (
  <header className={clsx('p-4', className)} {...props}>
    {children}
  </header>
)
