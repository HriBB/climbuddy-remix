import { execute } from '~/data.server'
import { ImageDocument, ImageQuery, ImageQueryVariables } from '~/types'

export const fetchImage = (variables: ImageQueryVariables) =>
  execute<ImageQuery, ImageQueryVariables>(ImageDocument, variables)
