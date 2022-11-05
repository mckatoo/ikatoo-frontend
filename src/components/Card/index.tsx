import Styles from './styles'

export type CardProps = {
  title: string
  subTitle?: string
  content: string
}

const Card = ({ title, subTitle, content }: CardProps) => (
  <Styles.Wrapper>
    <Styles.Title>{title}</Styles.Title>
    {!!subTitle && <Styles.Subtitle>{subTitle}</Styles.Subtitle>}
    <Styles.Content>{content}</Styles.Content>
  </Styles.Wrapper>
)

export default Card
