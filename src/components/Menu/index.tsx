import { NavLink, useLocation } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import Logo from '../Logo'
import MediaMatch from '../MediaMatch'
import Styles from './styles'

type SideMenuItem = {
  label: string
  to: string
}

type SocialUsernameProps = {
  name: string
  url: string
  url_icon: string
}

export type SideMenuProps = {
  links: SideMenuItem[]
  social: SocialUsernameProps[]
}

const Menu = ({ social, links }: SideMenuProps) => {
  const { pathname } = useLocation()
  const getStyle = (to: string, isActive: boolean) => {
    const isRoot =
      to === 'about' && (pathname === '/' || /^\/admin\/?$/gm.test(pathname))
    return isActive || isRoot ? 'text-mck_aqua' : 'text-gray-500'
  }

  return (
    <>
      <MediaMatch greaterThan="md">
        <Styles.Menu>
          <Styles.LogoWrapper>
            <Logo name="Milton Carlos Katoo" description="Software Developer" />
          </Styles.LogoWrapper>

          <Styles.LinksWrapper>
            <Styles.Links>
              {!!links.length &&
                links.map(({ label, to }, index) => (
                  <Styles.LinksItem key={index}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => getStyle(to, isActive)}
                    >
                      {label}
                    </NavLink>
                  </Styles.LinksItem>
                ))}
            </Styles.Links>
          </Styles.LinksWrapper>

          <Styles.SocialWrapper>
            {!!social.length &&
              social.map((social, index) => (
                <Styles.SocialLink
                  key={index}
                  href={social.url}
                  target="_parent"
                  rel="noreferrer"
                >
                  <SVG src={social.url_icon} title={social.name} />
                </Styles.SocialLink>
              ))}
          </Styles.SocialWrapper>
        </Styles.Menu>
      </MediaMatch>
    </>
  )
}

export default Menu
