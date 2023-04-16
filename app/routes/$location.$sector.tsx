import { SerializeFrom, json } from '@remix-run/node'
import { Outlet, useRouteLoaderData } from '@remix-run/react'
import { fetchSector } from '~/sector'
import { CACHE_CONTROL } from '~/http'

type Params = {
  location: string
  sector: string
}

export const useSectorData = () =>
  useRouteLoaderData('routes/$location.$sector') as SerializeFrom<typeof loader>

export const loader = async ({ params }: { params: Params }) => {
  const { data, errors } = await fetchSector(params)
  const sector = data?.sector?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('<br />')
  if (error) {
    throw new Response('Sector Loader Error', { status: 500 })
  }
  if (!sector) {
    throw new Response('Sector Not Found', { status: 404 })
  }
  return json({ sector }, { headers: { 'Cache-Control': CACHE_CONTROL.doc } })
}

export default function SectorLayout() {
  return <Outlet />
}
