import { Link } from '@remix-run/react'
import { useLocationData } from '~/routes/$location'
import { useSectorData } from '~/routes/$location.$sector'
import { getUrl } from '~/location'

const Separator = () => <> &gt; </>

export const Header = () => {
  const l = useLocationData()
  const s = useSectorData()
  return (
    <header className="app-header p-4 dark:bg-slate-700">
      <Link to="/">Homee</Link>
      {l?.location && (
        <>
          <Separator />
          <Link to={getUrl(l.location)}>{l.location.attributes?.name}</Link>
          {s?.sector && (
            <>
              <Separator />
              <Link to={getUrl(l.location, s.sector)}>
                {s.sector.attributes?.name}
              </Link>
            </>
          )}
        </>
      )}
    </header>
  )
}
