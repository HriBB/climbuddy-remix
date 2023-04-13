import clsx from 'clsx'
import { RouteItemFragment } from '~/types'

export type ToolbarRouteProps = React.ComponentProps<'h3'> & {
  route: RouteItemFragment
}

export const ToolbarRoute = ({
  route,
  className,
  ...props
}: ToolbarRouteProps) => {
  return (
    <h3 className={clsx('text-white flex-1 mr-5', className)} {...props}>
      {route.attributes?.name}
    </h3>
  )
}
