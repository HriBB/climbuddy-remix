import clsx from 'clsx'

export type ListItemProps = React.ComponentProps<'li'> & {
  active?: boolean
}

export const ListItem = ({
  children,
  className,
  active,
  ...props
}: ListItemProps) => (
  <li
    className={clsx(
      'text-lg [&>a]:block [&>a]:p-2',
      'border-b dark:border-slate-700 last:border-0',
      'hover:bg-slate-200 dark:hover:bg-slate-900',
      active && 'bg-slate-200 dark:bg-slate-900',
      className
    )}
    {...props}
  >
    {children}
  </li>
)
