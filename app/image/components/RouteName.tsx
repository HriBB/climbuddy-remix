import { RouteItemFragment } from '~/types'

export type RouteNameProps = {
  route: RouteItemFragment
}

export const RouteName = ({ route }: RouteNameProps) => {
  const { name, grade, sitstart } = route.attributes || {}
  return (
    <>
      {name}
      {grade?.data ? `, ${grade.data?.attributes?.grade}` : null}
      {sitstart ? ', ss' : null}
    </>
  )
}
