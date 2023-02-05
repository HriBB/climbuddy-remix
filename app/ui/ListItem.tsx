import clsx from 'clsx'

type Props = React.ComponentProps<'li'> & {
  children: React.ReactNode
}

export const ListItem = ({ children, className, ...props }: Props) => (
  <li className={clsx('text-lg flex p-2 border', className)} {...props}>
    {children}
  </li>
)
