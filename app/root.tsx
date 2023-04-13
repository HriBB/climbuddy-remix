import {
  ActionArgs,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  json,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from '@remix-run/react'

import swiperCss from '../node_modules/swiper/swiper.min.css'
import virtualCss from '../node_modules/swiper/modules/virtual/virtual.min.css'
import tailwindCss from './tailwind.css'

import { themeCookie } from './cookies'
import { Theme } from './theme'
import { Header } from './header'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ClimBuddy',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: swiperCss },
    { rel: 'stylesheet', href: virtualCss },
    { rel: 'stylesheet', href: tailwindCss },
  ]
}

export const loader = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = await themeCookie.parse(cookieHeader)
  const t = cookie?.theme
  const theme = Object.values(Theme).includes(t) ? t : Theme.LIGHT
  return json({ theme })
}

export const action = async ({ request }: ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themeCookie.parse(cookieHeader)) || {}
  const form = await request.formData()
  const t = form.get('theme') as Theme
  cookie.theme = Object.values(Theme).includes(t) ? t : Theme.LIGHT
  return json(
    { success: true },
    {
      status: 200,
      headers: {
        'Set-Cookie': await themeCookie.serialize(cookie),
      },
    }
  )
}

type RootData = {
  theme: Theme
}

export const useRootData = () => useRouteLoaderData('root') as RootData

export default function App() {
  const { theme } = useLoaderData<typeof loader>()
  return (
    <html lang="en" className={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
