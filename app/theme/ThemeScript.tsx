import { useLayoutEffect, useMemo } from 'react'
import { useTheme } from './useTheme'
import { Theme } from './types'

export const ThemeScript = () => {
  const theme = useTheme()

  const script = useMemo(
    () => `
    const theme = ${JSON.stringify(theme)}
    if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("dark");
    }
  `,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  if (typeof document !== 'undefined') {
    // eslint-disable-next-line
    useLayoutEffect(() => {
      if (theme === Theme.LIGHT) {
        document.documentElement.classList.remove(Theme.DARK)
      } else if (theme === Theme.DARK) {
        document.documentElement.classList.add(Theme.DARK)
      } else if (theme === Theme.SYSTEM) {
        function check(media: MediaQueryList) {
          if (media.matches) {
            document.documentElement.classList.add(Theme.DARK)
          } else {
            document.documentElement.classList.remove(Theme.DARK)
          }
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)')
        check(media)

        // @ts-expect-error
        media.addEventListener('change', check)
        // @ts-expect-error
        return () => media.removeEventListener('change', check)
      } else {
        console.error('Impossible color scheme state:', theme)
      }
    }, [theme])
  }

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
