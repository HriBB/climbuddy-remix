import clsx from 'clsx'

type Props = React.ComponentProps<'main'> & {
  children: React.ReactNode
}

export const Main = ({ children, className, ...props }: Props) => (
  <main className={clsx('h-full flex flex-col', className)} {...props}>
    {children}
  </main>
)
