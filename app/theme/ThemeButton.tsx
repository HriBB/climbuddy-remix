import { Form, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { DetailsMenu } from '~/components'
import { DarkIcon, LightIcon, icons } from './icons'
import { useTheme } from './useTheme'
import { Theme } from './types'

type Props = React.ComponentPropsWithRef<'details'>

export const ThemeButton = ({ className, ...props }: Props) => {
  const location = useLocation()
  const theme = useTheme()

  return (
    <DetailsMenu
      className={clsx('relative cursor-pointer', className)}
      {...props}
    >
      <summary className="w-12 h-12 flex items-center justify-center text-xs shadow">
        <LightIcon className="dark:hidden" />
        <DarkIcon className="hidden dark:block" />
      </summary>
      <Form
        className="absolute top-12 right-0 p-2 bg-white dark:bg-slate-800 shadow z-50"
        replace
        action="/theme"
        method="post"
      >
        <input
          type="hidden"
          name="returnTo"
          value={location.pathname + location.search}
        />
        {Object.values(Theme).map((t) => {
          const Icon = icons[t]
          return (
            <button
              key={t}
              className={clsx(
                'flex items-center w-full gap-2 p-2 text-left',
                t === theme && 'text-blue-400'
              )}
              name="theme"
              value={t}
            >
              <Icon />
              {t}
            </button>
          )
        })}
      </Form>
    </DetailsMenu>
  )
}
