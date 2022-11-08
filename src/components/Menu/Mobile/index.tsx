import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { NavLink, useLocation } from 'react-router-dom'
import { SideMenuProps } from '..'
import CloseButton from '../../CloseButton'
import Logo from '../../Logo'
import MenuButton from '../../MenuButton'
import Styles from './styles'

const MobileMenu = ({ social, links }: SideMenuProps) => {
  const { pathname } = useLocation()

  const [isClosed, setIsClosed] = useState(true)

  const getStyle = (to: string, isActive: boolean) => {
    const isRoot =
      to === 'about' && (pathname === '/' || /^\/admin\/?$/gm.test(pathname))
    return isActive || isRoot ? 'text-mck_aqua' : 'text-gray-500'
  }

  return (
    <Styles.Menu $isClosed={isClosed}>
      <Styles.MobileBar>
        <Styles.IconWrapper onClick={() => setIsClosed(true)}>
          <Logo mobileSize />
        </Styles.IconWrapper>
        <Styles.IconWrapper onClick={() => setIsClosed(!isClosed)}>
          {isClosed ? <MenuButton /> : <CloseButton />}
        </Styles.IconWrapper>
      </Styles.MobileBar>

      <Styles.Navigator $isClosed={isClosed}>
        <Styles.LinksWrapper>
          <Styles.Links>
            {!!links.length &&
              links.map(({ label, to }, index) => (
                <Styles.LinksItem key={index}>
                  <NavLink
                    onClick={() => setIsClosed(true)}
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
                onClick={() => setIsClosed(true)}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <SVG src={social.url_icon} title={social.name} />
              </Styles.SocialLink>
            ))}
        </Styles.SocialWrapper>
      </Styles.Navigator>
    </Styles.Menu>
  )
}

export default MobileMenu
