import clsx from 'clsx'

type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
  Tag?: 'h1' | 'h2'
}

export const Title = ({ children, className, Tag = 'h1', ...props }: Props) => (
  <Tag className={clsx('text-3xl m-0 p-4', className)} {...props}>
    {children}
  </Tag>
)
