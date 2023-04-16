import { NavLink } from '@remix-run/react'
import { ListItem } from '~/components'
import { RouteItemFragment } from '~/types'

type Props = {
  route: RouteItemFragment
  active: boolean
  url: string
}

export const RouteListItem = ({ route, active, url }: Props) => {
  const { name, grade, sitstart } = route.attributes || {}
  return (
    <ListItem active={active}>
      <NavLink to={url}>
        {name}
        {grade && `, ${grade.data?.attributes?.grade}`}
        {sitstart && ', ss'}
      </NavLink>
    </ListItem>
  )
}
