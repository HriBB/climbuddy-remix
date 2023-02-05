type Props = React.ComponentProps<'main'> & {
  children: React.ReactNode
}

const styles = {}

export const Main = ({ children, ...props }: Props) => {
  return (
    <main {...props} style={styles}>
      {children}
    </main>
  )
}
