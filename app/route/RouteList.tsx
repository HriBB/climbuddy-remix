import { List } from '~/ui'

type Props = {
  children: React.ReactNode
}

export const RouteList = ({ children }: Props) => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <List>{children}</List>
    </div>
  )
}
