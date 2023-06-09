import {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  SerializeFrom,
  json,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from '@remix-run/react'

import { ThemeScript, parseTheme, useTheme } from '~/theme'
import { parseImageSize } from '~/image'
import { Header } from '~/header'

import swiperCss from '../node_modules/swiper/swiper.min.css'
import virtualCss from '../node_modules/swiper/modules/virtual/virtual.min.css'
import tailwindCss from './tailwind.css'

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
  const imageSize = await parseImageSize(request)
  const theme = await parseTheme(request)
  return json({ imageSize, theme })
}

export const useRootData = () =>
  useRouteLoaderData('root') as SerializeFrom<typeof loader>

export default function App() {
  const theme = useTheme()
  return (
    <html lang="en" className={theme ?? ''} suppressHydrationWarning>
      <head>
        <Meta />
        <Links />
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-slate-300">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
