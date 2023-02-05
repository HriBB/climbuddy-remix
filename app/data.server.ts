import { print, DocumentNode } from 'graphql'
import { API_URL } from '~/env'

export type GraphQLError = {
  message: string
  locations: { line: number; column: number }[]
  path: [string | number]
}

export async function execute<T, V>(
  document: DocumentNode,
  variables?: V
): Promise<{ data?: T; errors?: GraphQLError[] }> {
  const result = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
  })
  const data = await result.json()
  return data
}
