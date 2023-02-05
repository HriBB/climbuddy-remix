import { Outlet, useRouteLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { execute } from '~/data.server'
import {
  LocationDocument,
  LocationFragment,
  LocationQuery,
  LocationQueryVariables,
} from '~/types'

type Params = {
  location: string
}

export type LocationData = {
  location: LocationFragment
}

export const useLocationData = () =>
  useRouteLoaderData('routes/$location') as LocationData

export const loader = async ({ params }: { params: Params }) => {
  const { data, errors } = await execute<LocationQuery, LocationQueryVariables>(
    LocationDocument,
    params
  )
  const location = data?.location?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('\n')
  if (error) {
    throw new Response('Location Loader Error', { status: 500 })
  }
  if (!location) {
    throw new Response('Location Not Found', { status: 404 })
  }
  return json({ location })
}

export default function LocationLayout() {
  return <Outlet />
}
