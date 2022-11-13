import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Session from '../../../components/Session'
import Menu, { SideMenuProps } from '../../../components/Menu'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import Styles from './styles'

export const PublicLayout = () => {
  const auth = useContext(AuthContext)

  const menu: SideMenuProps = {
    links: [
      {
        label: 'Sobre',
        to: 'about'
      },
      {
        label: 'Habilidades',
        to: 'skills'
      },
      {
        label: 'Projetos',
        to: 'projects'
      },
      {
        label: 'Contato',
        to: 'contact'
      }
    ],
    social: [
      {
        name: 'github',
        url: 'https://github.com/mckatoo',
        url_icon: '/images/github.svg'
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/mckatoo',
        url_icon: '/images/youtube.svg'
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/mckatoo',
        url_icon: '/images/linkedin.svg'
      }
    ]
  }

  return (
    <div className="h-screen flex flex-cols">
      {!!auth.user && <Session />}
      <Menu {...menu} />
      <Styles.Container>
        <Outlet />
      </Styles.Container>
    </div>
  )
}
