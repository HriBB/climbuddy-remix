import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { Content, Header, List, ListItem, Main, Title } from '~/ui'
import { fetchLocations } from '~/location'

export const loader = async () => {
  const { data, errors } = await fetchLocations()
  const locations = data?.locations?.data || []
  const error = !!errors?.length && errors.map((e) => e.message).join('<br />')
  if (error) {
    throw new Response('Sector Loader Error', { status: 500 })
  }
  return json({ locations })
}

export default function HomePage() {
  const { locations } = useLoaderData<typeof loader>()
  return (
    <Main>
      <Header>Home</Header>
      <Content>
        <Title>Locations</Title>
        <List>
          {locations.map((location) => (
            <ListItem key={location.id}>
              <Link to={`/${location.attributes?.slug}`}>
                {location.attributes?.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Content>
    </Main>
  )
}
