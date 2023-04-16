import { ActionArgs, redirect, createCookie } from '@remix-run/node'
import { safeRedirect } from '~/utils'
import { Theme } from './types'

const cookie = createCookie('theme', {
  maxAge: 31_536_000, // one year
})

export const parseTheme = async (request: Request) => {
  const header = request.headers.get('Cookie')
  const data = await cookie.parse(header)
  const theme = data?.theme as Theme
  return validateTheme(theme) ? theme : Theme.SYSTEM
}

export const serializeTheme = async (theme: Theme) =>
  theme === Theme.SYSTEM
    ? cookie.serialize({}, { expires: new Date(0), maxAge: 0 })
    : cookie.serialize({ theme })

export const validateTheme = (theme: Theme) =>
  Object.values(Theme).includes(theme)

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const returnTo = safeRedirect(form.get('returnTo'))
  const theme = form.get('theme') as Theme
  console.log('action theme', theme)
  if (!validateTheme(theme)) {
    throw new Response('Bad Request', { status: 400 })
  }
  return redirect(returnTo || '/', {
    headers: {
      'Set-Cookie': await serializeTheme(theme),
    },
  })
}
