import { useCallback, useEffect, useRef, useState } from 'react'
import { useFetcher } from '@remix-run/react'
import { ImageSize } from '~/image'
import clsx from 'clsx'
import { IconButton } from '~/ui'

type Props = React.ComponentProps<'div'> & {
  imageSize?: ImageSize
}

export const SizeButton = ({
  imageSize = ImageSize.MEDIUM,
  className,
  ...props
}: Props) => {
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

  const fetcher = useFetcher()

  const setSize = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      const imageSize = e.currentTarget.dataset.size as ImageSize
      if (imageSize && Object.values(ImageSize).includes(imageSize)) {
        fetcher.submit(
          { imageSize },
          { method: 'POST', action: window.location.href }
        )
      }
      setOpen(false)
    },
    [fetcher]
  )

  return (
    <div className={clsx('relative', className)} {...props}>
      <IconButton ref={buttonRef} onClick={toggleOpen}>
        {imageSize}
      </IconButton>
      <ul
        className={
          open ? 'absolute bottom-8 right-0 p-2 bg-white shadow' : 'hidden'
        }
        ref={menuRef}
      >
        {Object.values(ImageSize).map((size) => (
          <li key={size}>
            <button
              className={`w-full p-2 hover:bg-slate-400 text-left ${
                size === imageSize ? 'bg-slate-300' : ''
              }`}
              onClick={setSize}
              data-size={size}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
