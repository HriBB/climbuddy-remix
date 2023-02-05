import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:1337/graphql': {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  },
  documents: ['app/**/*.gql'],
  generates: {
    'app/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-generic-sdk',
      ],
    },
  },
}

export default config
