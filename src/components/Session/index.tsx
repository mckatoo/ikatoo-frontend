import { useContext, useState } from 'react'

import { AuthContext } from '../../contexts/Auth/AuthContext'
import { Image, ImageWrapper, Item, Itens, Menu, Wrapper } from './styles'

const Session = () => {
  const { user, signOut } = useContext(AuthContext)
  const avatar = user?.avatar
  const [hidden, setHidden] = useState(true)

  return (
    <Wrapper>
      <Menu onClick={() => setHidden(!hidden)}>
        <ImageWrapper>
          <Image layout="object-fit" src={avatar?.url} alt={avatar?.alt} />
        </ImageWrapper>
        {user?.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Menu>
      <Itens $hidden={hidden}>
        <Item onClick={signOut}>Sair</Item>
      </Itens>
    </Wrapper>
  )
}

export default Session
