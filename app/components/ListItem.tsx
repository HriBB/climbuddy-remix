import clsx from 'clsx'

export type ListItemProps = React.ComponentProps<'li'>

export const ListItem = ({ children, className, ...props }: ListItemProps) => (
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
