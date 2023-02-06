import clsx from 'clsx'

type Props = React.ComponentProps<'li'> & {
  children: React.ReactNode
}

export const ListItem = ({ children, className, ...props }: Props) => (
  <li
    className={clsx(
      'text-lg border-b last:border-0 [&>a]:block [&>a]:p-2',
      className
    )}
    {...props}
  >
    {children}
  </li>
)
