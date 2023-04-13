import { ImageFragment } from '~/types'
import { Title, TitleProps } from '~/ui'
import { FullScreenContext } from './FullScreenContext'
import { useContext } from 'react'

export type ImageTitleProps = TitleProps

export const ImageTitle = ({ children, ...props }: ImageTitleProps) => {
  const fs = useContext(FullScreenContext)
  return (
    <Title
      className={
        fs.active
          ? 'absolute top-0 left-0 right-0 z-50 text-white'
          : 'text-black'
      }
      {...props}
    >
      {children}
    </Title>
  )
}
