import { Image, ImageWrapper, Wrapper } from "./styles"

export type SessionProps = {
  email: string
  avatar: {
    url: string
    alt: string
  }
}

const Session = ({ email, avatar }: SessionProps) =>
  <Wrapper>
    <ImageWrapper>
      <Image src={avatar.url} alt={avatar.alt} />
    </ImageWrapper>
  </Wrapper>


export default Session