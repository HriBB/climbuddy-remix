import clsx from 'clsx'

export type ContentProps = React.ComponentProps<'main'>

export const Content = ({ children, className, ...props }: ContentProps) => (
  <main className={clsx('app-content flex flex-col', className)} {...props}>
    {children}
  </main>
)
