import { useLocation, useNavigation } from '@remix-run/react'
import { forwardRef, useEffect, useRef, useState } from 'react'

type Props = React.ComponentPropsWithRef<'details'>

export const DetailsMenu = forwardRef<HTMLDetailsElement, Props>(
  function DetailsMenu(
    { onToggle, onMouseDown, onTouchStart, onFocus, open, ...rest },
    forwardedRef
  ) {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigation = useNavigation()
    const clickRef = useRef<boolean>(false)
    const focusRef = useRef<boolean>(false)

    useEffect(() => {
      if (navigation.formData) {
        setIsOpen(false)
      }
    }, [navigation])

    useEffect(() => {
      setIsOpen(false)
    }, [location.key])

    useEffect(() => {
      if (isOpen) {
        console.log('isOpen create handlers')

        let clickHandler = () => {
          if (!clickRef.current) setIsOpen(false)
          clickRef.current = false
        }
        let focusHandler = () => {
          if (!focusRef.current) setIsOpen(false)
          focusRef.current = false
        }
        document.addEventListener('mousedown', clickHandler)
        document.addEventListener('touchstart', clickHandler)
        document.addEventListener('focusin', focusHandler)
        return () => {
          document.removeEventListener('mousedown', clickHandler)
          document.removeEventListener('touchstart', clickHandler)
          document.removeEventListener('focusin', focusHandler)
        }
      }
    }, [isOpen])

    return (
      <details
        ref={forwardedRef}
        open={open ?? isOpen}
        onToggle={(event) => {
          onToggle && onToggle(event)
          if (event.defaultPrevented) return
          setIsOpen(event.currentTarget.open)
        }}
        onMouseDown={(event) => {
          onMouseDown && onMouseDown(event)
          if (event.defaultPrevented) return
          if (isOpen) clickRef.current = true
        }}
        onTouchStart={(event) => {
          onTouchStart && onTouchStart(event)
          if (event.defaultPrevented) return
          if (isOpen) clickRef.current = true
        }}
        onFocus={(event) => {
          onFocus && onFocus(event)
          if (event.defaultPrevented) return
          if (isOpen) focusRef.current = true
        }}
        {...rest}
      />
    )
  }
)
