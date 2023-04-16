import clsx from 'clsx'
import { List } from '~/components'

type Props = React.ComponentProps<'div'>

export const RouteList = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={clsx('relative flex-1 md:flex-none md:w-[250px]', className)}
      {...props}
    >
      <List className="absolute top-0 left-0 right-0 bottom-0 pt-4 pb-16 overflow-auto">
        {children}
      </List>
    </div>
  )
}
