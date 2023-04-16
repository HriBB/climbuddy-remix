import { createElement } from 'react'
import { Form, useLocation } from '@remix-run/react'
import { DetailsMenu, SummaryIcon, MenuPopup, MenuButton } from '~/components'
import { DarkIcon, LightIcon, icons } from './icons'
import { Theme } from './types'
import { useTheme } from './useTheme'

type Props = React.ComponentPropsWithRef<'details'>

export const ThemeButton = ({ className, ...props }: Props) => {
  const location = useLocation()
  const theme = useTheme()
  return (
    <DetailsMenu className={className} {...props}>
      <SummaryIcon>
        <LightIcon className="dark:hidden" />
        <DarkIcon className="hidden dark:block" />
      </SummaryIcon>
      <MenuPopup bottom left>
        <Form replace action="/theme" method="post">
          <input
            type="hidden"
            name="returnTo"
            value={location.pathname + location.search}
          />
          {Object.values(Theme).map((t) => (
            <MenuButton
              key={t}
              active={t === theme}
              disabled={t === theme}
              name="theme"
              value={t}
            >
              {createElement(icons[t])}
              {t}
            </MenuButton>
          ))}
        </Form>
      </MenuPopup>
    </DetailsMenu>
  )
}
