import { useCallback, useEffect, useRef, useState } from 'react'
import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { Theme } from '~/theme'
import { IconButton } from '~/components'
import { useRootData } from '~/root'

type Props = React.ComponentProps<'div'>

export const ThemeButton = ({ className, ...props }: Props) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen(!open), [open])

  type Keydown = (e: KeyboardEvent) => void
  const keydown = useRef<Keydown | null>(null)

  type Click = (e: MouseEvent) => void
  const click = useRef<Click | null>(null)

  useEffect(() => {
    if (open) {
      if (!keydown.current) {
        keydown.current = (e) => {
          if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', keydown.current)
      }
      if (!click.current) {
        click.current = (e) => {
          const el = e.target as HTMLElement
          const withinList = menuRef.current?.contains(el)
          const withinButton = buttonRef.current?.contains(el)
          if (!withinList && !withinButton) setOpen(false)
        }
        window.addEventListener('mousedown', click.current)
      }
    } else {
      if (keydown.current) {
        window.removeEventListener('keydown', keydown.current)
        keydown.current = null
      }
      if (click.current) {
        window.removeEventListener('mousedown', click.current)
        click.current = null
      }
    }
  }, [open])

  useEffect(
    () => () => {
      if (keydown.current) {
        window.removeEventListener('keydown', keydown.current)
        keydown.current = null
      }
      if (click.current) {
        window.removeEventListener('mousedown', click.current)
        click.current = null
      }
    },
    []
  )

  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const { theme } = useRootData()
  const fetcher = useFetcher()

  const setTheme = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      const t = e.currentTarget.dataset.theme as Theme
      if (t && Object.values(Theme).includes(t)) {
        fetcher.submit({ theme: t }, { method: 'POST', action: '/' })
      }
      setOpen(false)
    },
    [fetcher]
  )

  return (
    <div className={clsx('relative', className)} {...props}>
      <IconButton ref={buttonRef} onClick={toggleOpen}>
        {theme}
      </IconButton>
      <ul
        className={
          open ? 'absolute bottom-8 right-0 p-2 bg-white shadow' : 'hidden'
        }
        ref={menuRef}
      >
        {Object.values(Theme).map((t) => (
          <li key={t}>
            <button
              className={`w-full p-2 hover:bg-slate-400 text-left ${
                t === theme ? 'bg-slate-300' : ''
              }`}
              onClick={setTheme}
              data-theme={t}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
