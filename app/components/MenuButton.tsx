import clsx from 'clsx'

export type MenuButtonProps = React.ComponentProps<'button'> & {
  active?: boolean
}

export const MenuButton = ({
  children,
  className,
  active,
  ...props
}: MenuButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center w-full gap-2 p-2 text-left',
        'hover:bg-slate-200 dark:hover:bg-slate-700',
        active && 'text-blue-500'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
