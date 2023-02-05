type Props = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

const styles = {}

export const Content = ({ children, ...props }: Props) => {
  return (
    <div {...props} style={styles}>
      {children}
    </div>
  )
}
