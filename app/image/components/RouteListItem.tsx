import { NavLink } from '@remix-run/react'
import { ListItem, ListItemProps } from '~/components'
import { RouteItemFragment } from '~/types'
import { RouteName } from './RouteName'

export type RouteListItemProps = ListItemProps & {
  route: RouteItemFragment
  active: boolean
  url: string
}

export const RouteListItem = ({
  route,
  active,
  url,
  ...props
}: RouteListItemProps) => {
  return (
    <ListItem active={active} {...props}>
      <NavLink to={url}>
        <RouteName route={route} />
      </NavLink>
    </ListItem>
  )
}
