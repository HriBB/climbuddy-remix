import clsx from 'clsx'

type Props = React.ComponentProps<'div'>

export const ImageToolbar = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={clsx(
        'absolute flex gap-2 items-center z-10 bottom-0 right-0 p-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
