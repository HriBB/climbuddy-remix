import clsx from 'clsx'
import { RouteItemFragment } from '~/types'
import { RouteName } from './RouteName'

export type ToolbarRouteProps = React.ComponentProps<'h3'> & {
  route: RouteItemFragment
}

export const ToolbarRoute = ({
  className,
  route,
  ...props
}: ToolbarRouteProps) => {
  return (
    <h3 className={clsx('flex-1 mr-5', className)} {...props}>
      <RouteName route={route} />
    </h3>
  )
}
