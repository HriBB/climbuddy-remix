import clsx from 'clsx'

export type MenuPopupProps = React.ComponentProps<'div'> & {
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
}

export const MenuPopup = ({
  children,
  className,
  top,
  left,
  right,
  bottom,
  ...props
}: MenuPopupProps) => {
  return (
    <div
      className={clsx(
        'absolute p-2 bg-white dark:bg-slate-950 shadow z-50',
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
