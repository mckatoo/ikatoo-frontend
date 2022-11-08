import MediaMatch from '../MediaMatch'
import DesktopMenu from './Desktop'
import MobileMenu from './Mobile'

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

const Menu = (props: SideMenuProps) => (
  <>
    <MediaMatch greaterThan="md">
      <DesktopMenu {...props} />
    </MediaMatch>
    <MediaMatch lessThan="md">
      <MobileMenu {...props} />
    </MediaMatch>
  </>
)

export default Menu
