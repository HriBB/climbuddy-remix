import { Link } from '@remix-run/react'
import { useLocationData } from '~/routes/$location'
import { useSectorData } from '~/routes/$location.$sector'
import { getUrl } from '~/location'
import { ThemeButton } from '~/theme'
import { useImageData } from './routes/$location.$sector.($image).($route)'

const Separator = () => <> &gt; </>

export const Header = () => {
  const l = useLocationData()
  const s = useSectorData()
  const i = useImageData()
  const location = l?.location
  const sector = s?.sector
  const image = i?.image
  return (
    <header className="app-header flex items-center h-14 md:h-16 gap-1 px-5">
      <Link to="/">Home</Link>
      {location && sector && (
        <>
          <Separator />
          <Link className="whitespace-nowrap" to={getUrl(location)}>
            {location.attributes?.name}
          </Link>
          {sector && image && (
            <>
              <Separator />
              <Link className="whitespace-nowrap" to={getUrl(location, sector)}>
                {sector.attributes?.name}
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
