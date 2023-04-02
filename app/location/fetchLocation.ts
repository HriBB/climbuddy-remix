import { execute } from '~/data.server'
import {
  LocationDocument,
  LocationQuery,
  LocationQueryVariables,
} from '~/types'

export const fetchLocation = (variables: LocationQueryVariables) =>
  execute<LocationQuery, LocationQueryVariables>(LocationDocument, variables)
