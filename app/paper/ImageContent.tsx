import clsx from 'clsx'

export type ImageContentProps = React.ComponentProps<'div'>

export const ImageContent = ({
  children,
  className,
  ...props
}: ImageContentProps) => {
  return (
    <div
      className={clsx('flex flex-1 flex-col md:flex-row-reverse', className)}
      {...props}
    >
      {children}
    </div>
  )
}
