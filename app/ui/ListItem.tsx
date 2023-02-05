type Props = React.ComponentProps<'li'> & {
  children: React.ReactNode
}

const styles = {
  fontSize: '1.25rem',
  lineHeight: '1.5',
}

export const ListItem = ({ children, ...props }: Props) => {
  return (
    <li {...props} style={styles}>
      {children}
    </li>
  )
}
