import { Link } from '@remix-run/react'
import { getUrl } from '~/location'
import { List, ListItem, Content, Title } from '~/ui'
import { useLocationData } from './$location'

export default function LocationPage() {
  const { location } = useLocationData()
  return (
    <Content>
      <Title>{location.attributes?.name}</Title>
      <List>
        {location.attributes?.sectors?.data.map((sector) => (
          <ListItem key={sector.id}>
            <Link to={getUrl(location, sector)}>{sector.attributes?.name}</Link>
          </ListItem>
        ))}
      </List>
    </Content>
  )
}
