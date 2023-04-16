import { Form, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { DetailsMenu } from '~/components'
import { SettingsIcon } from '~/components/icons'
import { ImageSize } from './types'

type Props = React.ComponentPropsWithRef<'details'> & {
  imageSize?: ImageSize
}

export const ImageSizeButton = ({
  imageSize = ImageSize.MEDIUM,
  className,
  ...props
}: Props) => {
  const location = useLocation()

  return (
    <DetailsMenu
      className={clsx('relative cursor-pointer', className)}
      {...props}
    >
      <summary className="flex items-center justify-center w-12 h-12">
        <SettingsIcon />
      </summary>
      <Form
        className="absolute bottom-12 right-0 p-2 bg-white shadow z-50"
        replace
        action="/image-size"
        method="post"
      >
        <input
          type="hidden"
          name="returnTo"
          value={location.pathname + location.search}
        />
        {Object.values(ImageSize).map((size) => (
          <button
            key={size}
            className={clsx(
              'w-full p-2 hover:bg-slate-400 text-left',
              size === imageSize ?? 'bg-slate-300'
            )}
            name="imageSize"
            value={size}
          >
            {size}
          </button>
        ))}
      </Form>
    </DetailsMenu>
  )
}
