type Props = React.ComponentProps<'ol'> & {
  children: React.ReactNode
}

const styles = {
  margin: 0,
  marginBottom: '1rem',
}

export const List = ({ children, ...props }: Props) => {
  return (
    <ol {...props} style={styles}>
      {children}
    </ol>
  )
}
