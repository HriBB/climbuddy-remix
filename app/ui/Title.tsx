import clsx from 'clsx'

export type TitleProps = React.ComponentProps<'div'> & {
  Tag?: 'h1' | 'h2'
}

export const Title = ({
  children,
  className,
  Tag = 'h1',
  ...props
}: TitleProps) => (
  <Tag className={clsx('app-title text-2xl m-0 p-4', className)} {...props}>
    {children}
  </Tag>
)
