import { Link } from '@remix-run/react'
import { useLocationData } from '~/routes/$location'
import { useSectorData } from '~/routes/$location.$sector'
import { getUrl } from '~/location'
import { ThemeButton } from '~/theme'

const Separator = () => <> &gt; </>

export const Header = () => {
  const l = useLocationData()
  const s = useSectorData()
  return (
    <header className="app-header flex items-center h-14 md:h-16 gap-1 px-5 dark:text-white dark:bg-slate-700">
      <Link to="/">Home</Link>
      {l?.location && (
        <>
          <Separator />
          <Link className="whitespace-nowrap" to={getUrl(l.location)}>
            {l.location.attributes?.name}
          </Link>
          {s?.sector && (
            <>
              <Separator />
              <Link
                className="whitespace-nowrap"
                to={getUrl(l.location, s.sector)}
              >
                {s.sector.attributes?.name}
              </Link>
            </>
          )}
        </>
      )}
      <div className="flex flex-1 justify-end">
        <ThemeButton />
      </div>
    </header>
  )
}
