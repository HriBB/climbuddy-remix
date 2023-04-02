type Props = {
  children: React.ReactNode
}

export const ImageToolbar = ({ children }: Props) => {
  return <div className="absolute z-10 bottom-0 right-0 p-2">{children}</div>
}
