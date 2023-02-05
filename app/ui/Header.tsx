type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

const styles = {
  padding: '1rem',
}

export const Header = ({ children, ...props }: Props) => {
  return (
    <div {...props} style={styles}>
      {children}
    </div>
  )
}
