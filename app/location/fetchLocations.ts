import { execute } from '~/data.server'
import {
  LocationsQuery,
  LocationsDocument,
  LocationsQueryVariables,
} from '~/types'

export const fetchLocations = async () =>
  execute<LocationsQuery, LocationsQueryVariables>(LocationsDocument)
