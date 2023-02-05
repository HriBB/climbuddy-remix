import { Link } from '@remix-run/react'
import { Content, Header, List, ListItem, Main, Title } from '~/ui'
import { useLocationData } from './$location'
import { useSectorData } from './$location.$sector'

export default function SectorIndexPage() {
  const { location } = useLocationData()
  const { sector } = useSectorData()
  return (
    <Main>
      <Header>
        <Link to="/">Home</Link> &gt;{' '}
        <Link to={`/${location.attributes?.slug}`}>
          {location.attributes?.name}
        </Link>
      </Header>
      <Content>
        <Title>{sector.attributes?.name}</Title>
        <List>
          {sector.attributes?.images?.data.map((image) => (
            <ListItem key={image.id}>
              <Link
                to={`/${location.attributes?.slug}/${sector.attributes?.slug}/${image.attributes?.slug}`}
              >
                {image.attributes?.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Content>
    </Main>
  )
}
