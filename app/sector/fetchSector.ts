import { execute } from '~/data.server'
import { SectorDocument, SectorQuery, SectorQueryVariables } from '~/types'

export const fetchSector = (variables: SectorQueryVariables) =>
  execute<SectorQuery, SectorQueryVariables>(SectorDocument, variables)
