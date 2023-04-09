import clsx from 'clsx'

export type ContentProps = React.ComponentProps<'div'>

export const Content = ({ children, className, ...props }: ContentProps) => (
  <div className={clsx(className)} {...props}>
    {children}
  </div>
)
