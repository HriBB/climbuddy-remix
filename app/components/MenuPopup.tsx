import clsx from 'clsx'

export type MenuPopupProps = React.ComponentProps<'div'> & {
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
  dark?: boolean
}

export const MenuPopup = ({
  children,
  className,
  top,
  left,
  right,
  bottom,
  dark,
  ...props
}: MenuPopupProps) => {
  return (
    <div
      className={clsx(
        'absolute p-2 shadow z-50',
        dark ? 'bg-slate-950' : 'bg-white dark:bg-slate-950',
        bottom && 'top-12',
        top && 'bottom-12',
        right && 'left-0',
        left && 'right-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
