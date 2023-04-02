import { createCookie } from '@remix-run/node'

export const imageSizeCookie = createCookie('imageSize', {
  maxAge: 31_536_000, // one year
})
