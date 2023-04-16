import { Outlet, useRouteLoaderData } from '@remix-run/react'
import { SerializeFrom, json } from '@remix-run/node'
import { fetchLocation } from '~/location'
import { CACHE_CONTROL } from '~/http'

type Params = {
  location: string
}

export const useLocationData = () =>
  useRouteLoaderData('routes/$location') as SerializeFrom<typeof loader>

export const loader = async ({ params }: { params: Params }) => {
  const { data, errors } = await fetchLocation(params)
  const location = data?.location?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('\n')
  if (error) {
    throw new Response('Location Loader Error', { status: 500 })
  }
  if (!location) {
    throw new Response('Location Not Found', { status: 404 })
  }
  return json({ location }, { headers: { 'Cache-Control': CACHE_CONTROL.doc } })
}

export default function LocationLayout() {
  return <Outlet />
}
