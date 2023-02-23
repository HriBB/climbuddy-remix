import { Link } from '@remix-run/react'
import { ListItem } from '~/ui'
import { RouteItemFragment } from '~/types'

type Props = {
  route: RouteItemFragment
  to: string
  active?: boolean
  className?: string
}

export const RouteListItem = ({ className, active, route, to }: Props) => {
  return (
    <ListItem className={className}>
      <Link className={active ? 'bg-slate-200' : ''} to={to}>
        {route.attributes?.name}
      </Link>
    </ListItem>
  )
}
