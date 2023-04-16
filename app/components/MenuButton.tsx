import clsx from 'clsx'

export type MenuButtonProps = React.ComponentProps<'button'> & {
  active?: boolean
  dark?: boolean
}

export const MenuButton = ({
  children,
  className,
  active,
  dark,
  ...props
}: MenuButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center w-full gap-2 p-2 text-left',
        dark
          ? 'hover:bg-slate-700'
          : 'hover:bg-slate-200 dark:hover:bg-slate-700',
        active && 'text-blue-500'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
