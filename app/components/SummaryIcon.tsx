import clsx from 'clsx'
import { IconButtonStyles } from './IconButton'

export type SummaryIconProps = React.ComponentProps<'summary'>

export const SummaryIcon = ({
  children,
  className,
  ...props
}: SummaryIconProps) => {
  return (
    <summary className={clsx(IconButtonStyles, className)} {...props}>
      {children}
    </summary>
  )
}
