import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import swiperCss from '../node_modules/swiper/swiper.min.css'
import swiperVirtualCss from '../node_modules/swiper/modules/virtual/virtual.min.css'
import tailwindCss from './tailwind.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ClimBuddy',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: swiperCss },
    { rel: 'stylesheet', href: swiperVirtualCss },
    { rel: 'stylesheet', href: tailwindCss },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
