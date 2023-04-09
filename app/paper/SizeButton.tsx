import { useCallback, useEffect, useRef, useState } from 'react'
import { Form } from '@remix-run/react'
import { ImageSize } from '~/image'
import clsx from 'clsx'
import { IconButton } from '~/ui'

type Props = React.ComponentProps<'div'> & {
  imageSize?: keyof typeof ImageSize
}

export const SizeButton = ({
  imageSize = 'medium',
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
          const withinList = formRef.current?.contains(el)
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
  const formRef = useRef<HTMLFormElement>(null)

  const [formImageSize, setFormImageSize] = useState<string>(imageSize)

  const setSize = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      const size = e.currentTarget.dataset.size
      if (size) setFormImageSize(size)
      setOpen(false)
    },
    []
  )

  return (
    <div className={clsx('dropdown-button relative', className)} {...props}>
      <IconButton
        className="w-16 h-8 bg-white text-xs"
        ref={buttonRef}
        onClick={toggleOpen}
      >
        {formImageSize}
      </IconButton>
      <Form
        className={open ? 'absolute bottom-8 right-0 p-2 bg-white' : 'hidden'}
        method="post"
        ref={formRef}
      >
        <input type="hidden" name="imageSize" value={formImageSize} />
        <ul>
          {Object.keys(ImageSize).map((size) => (
            <li key={size}>
              <button
                className="w-full p-2 hover:bg-slate-400"
                onClick={setSize}
                data-size={size}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </Form>
    </div>
  )
}
