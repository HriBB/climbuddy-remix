import { ActionArgs, redirect, createCookie } from '@remix-run/node'
import { safeRedirect } from '~/utils'
import { ImageSize } from './types'

export const cookie = createCookie('imageSize', {
  maxAge: 31_536_000, // one year
})

export const parseImageSize = async (request: Request) => {
  const header = request.headers.get('Cookie')
  const data = await cookie.parse(header)
  const size = data?.imageSize as ImageSize
  return validateImageSize(size) ? size : ImageSize.MEDIUM
}

export const serializeImageSize = async (imageSize: ImageSize) =>
  cookie.serialize({ imageSize })

export const validateImageSize = (imageSize: ImageSize) =>
  Object.values(ImageSize).includes(imageSize)

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const returnTo = safeRedirect(form.get('returnTo'))
  const imageSize = form.get('imageSize') as ImageSize
  console.log('action imageSize', imageSize)
  if (!validateImageSize(imageSize)) {
    throw new Response('Bad Request', { status: 400 })
  }
  return redirect(returnTo || '/', {
    headers: {
      'Set-Cookie': await serializeImageSize(imageSize),
    },
  })
}
