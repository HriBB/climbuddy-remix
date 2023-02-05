type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
  Tag?: 'h1' | 'h2'
}

const styles = {
  fontSize: '2em',
  padding: '1rem',
  margin: 0,
}

export const Title = ({ children, Tag = 'h1', ...props }: Props) => {
  return (
    <Tag {...props} style={styles}>
      {children}
    </Tag>
  )
}
