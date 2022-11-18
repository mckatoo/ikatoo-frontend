import { ButtonHTMLAttributes } from 'react'
import Styles from './styles'

type ButtonProps = {
  children?: React.ReactNode
  styleType?: 'primary' | 'secondary' | 'default'
  icon?: JSX.Element
  block?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  styleType = 'default',
  block = false
}: ButtonProps) => {
  return (
    <Styles.Wrapper $block={block} $type={styleType}>
      {!!icon && <Styles.IconWrapper>{icon}</Styles.IconWrapper>}
      {children}
    </Styles.Wrapper>
  )
}

export default Button
