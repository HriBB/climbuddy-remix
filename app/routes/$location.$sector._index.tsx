import { Link } from '@remix-run/react'
import { getUrl } from '~/location'
import { List, ListItem, Content, Title } from '~/components'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'

export default function SectorPage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  return (
    <Content>
      <Title>{sector.attributes?.name}</Title>
      <List>
        {sector.attributes?.images?.data.map((image) => (
          <ListItem key={image.id}>
            <Link to={getUrl(location, sector, image)}>
              {image.attributes?.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Content>
  )
}
