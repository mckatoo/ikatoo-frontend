import Styles from './styles'

export type CardProps = {
  image?: string
  title: string
  subTitle?: string
  content: string
}

const Card = ({ image, title, subTitle, content }: CardProps) => (
  <Styles.Wrapper>
    {!!image && <Styles.Image src={image} alt={title} />}
    <Styles.ContentWrapper>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Subtitle>{subTitle}</Styles.Subtitle>
      <Styles.Content>{content}</Styles.Content>
    </Styles.ContentWrapper>
  </Styles.Wrapper>
)

export default Card
