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
  <Tag className={clsx('text-2xl m-0 px-4 py-4 pt-0', className)} {...props}>
    {children}
  </Tag>
)
