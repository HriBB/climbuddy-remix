import { Form, useLocation } from '@remix-run/react'
import { DetailsMenu, SummaryIcon, MenuPopup, MenuButton } from '~/components'
import { SettingsIcon } from '~/components/icons'
import { ImageSize } from './types'
import { useImageSize } from './useImageSize'
import { useFullScreen } from '../fullscreen'
import { createElement } from 'react'
import { icons } from './icons'

type Props = React.ComponentPropsWithRef<'details'> & {
  imageSize?: ImageSize
}

export const ImageSizeButton = ({ className, ...props }: Props) => {
  const location = useLocation()
  const imageSize = useImageSize()
  const fullScreen = useFullScreen()

  return (
    <DetailsMenu className={className} {...props}>
      <SummaryIcon>
        <SettingsIcon />
      </SummaryIcon>
      <MenuPopup top left dark={fullScreen.active}>
        <Form replace action="/image-size" method="post">
          <input
            type="hidden"
            name="returnTo"
            value={location.pathname + location.search}
          />
          {Object.values(ImageSize).map((size) => (
            <MenuButton
              key={size}
              active={size === imageSize}
              dark={fullScreen.active}
              disabled={size === imageSize}
              name="imageSize"
              value={size}
            >
              {createElement(icons[size])}
              {size}
            </MenuButton>
          ))}
        </Form>
      </MenuPopup>
    </DetailsMenu>
  )
}
