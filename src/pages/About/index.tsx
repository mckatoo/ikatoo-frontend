import IconCloud from '../../components/IconCloud'
import { TextContainer } from '../../components/TextContainer'
import { about } from './mock'
import Styles from './styles'

export type AboutProps = {
  skills: string[]
  title?: string
  description: string
  image?: {
    src: string
    alt: string
  }
}

export const About = () => {
  const { description, title, image, skills } = about

  return (
    <Styles.Wrapper>
      <Styles.Text>
        {!!title && (
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TextContainer>
        )}
      </Styles.Text>

      {!image ? (
        <Styles.Skills>
          <IconCloud slugs={skills} />
        </Styles.Skills>
      ) : (
        <Styles.ImageWrapper>
          <img src={image.src} alt={image.alt} />
        </Styles.ImageWrapper>
      )}
    </Styles.Wrapper>
  )
}
