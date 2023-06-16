import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}

export interface SearchManufacturer {
  manufacturer: string
  setManuFacturer: (manufacturer: string) => void
}

export interface CustomFilter {
  title: string
}
