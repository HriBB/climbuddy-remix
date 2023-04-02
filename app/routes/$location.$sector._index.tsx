import { Link } from '@remix-run/react'
import { getUrl } from '~/location'
import { Content, Header, List, ListItem, Main, Title } from '~/ui'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'

export default function SectorPage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  return (
    <Main>
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={getUrl(location)}>{location.attributes?.name}</Link>
      </Header>
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
    </Main>
  )
}
