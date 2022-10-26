import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Image, ImageWrapper, Item, Itens, Menu, Wrapper } from "./styles"

export type SessionProps = {
  avatar: {
    url: string
    alt: string
  }
}

const Session = ({ avatar }: SessionProps) => {
  const auth = useContext(AuthContext)
  const [hidden, setHidden] = useState(true);

  return (
    <Wrapper>
      <Menu onClick={() => setHidden(!hidden)}>
        <ImageWrapper>
          <Image src={avatar.url} alt={avatar.alt} />
        </ImageWrapper>
        {auth.user?.name}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </Menu>
      <Itens $hidden={hidden} >
        <Item onClick={auth.signOut}>Sair</Item>
      </Itens>
    </Wrapper>
  )

}


export default Session