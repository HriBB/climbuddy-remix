import { Outlet, useRouteLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { execute } from '~/data.server'
import {
  SectorDocument,
  SectorFragment,
  SectorQuery,
  SectorQueryVariables,
} from '~/types'

type Params = {
  location: string
  sector: string
}

export type SectorData = {
  sector: SectorFragment
}

export const useSectorData = () =>
  useRouteLoaderData('routes/$location.$sector') as SectorData

export const loader = async ({ params }: { params: Params }) => {
  const { data, errors } = await execute<SectorQuery, SectorQueryVariables>(
    SectorDocument,
    params
  )
  const sector = data?.sector?.data
  const error = !!errors?.length && errors.map((e) => e.message).join('<br />')
  if (error) {
    throw new Response('Sector Loader Error', { status: 500 })
  }
  if (!sector) {
    throw new Response('Sector Not Found', { status: 404 })
  }
  return json({ sector })
}

export default function SectorLayout() {
  return <Outlet />
}
