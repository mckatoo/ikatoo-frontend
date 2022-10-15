import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

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

const SideMenu = ({ social, links }: SideMenuProps) => {

  const getStyle = (to: string, isActive: boolean) => {
    const isRoot = to === 'about' && window.location.pathname === '/'
    return isActive || isRoot ? 'text-mck_aqua' : 'text-gray-500'
  }

  return (
    <>
      <menu
        aria-label="Side Menu"
        className="
          text-center
          w-fit
          max-w-[13rem]
          z-20
          h-full
          bg-slate-800
          flex
          flex-col
          justify-between
      ">
        <div className="z-30 flex justify-center px-4 py-8 bg-mck_black">
          <Logo aria-label="Logotipo" name="Milton Carlos Katoo" description="Software Developer" />
        </div>

        <div className="text-lg">
          <ul className="list-reset border-slate-700 border-y-2 divide-y divide-slate-700 font-semibold">
            {!!links.length && links.map(({ label, to }, index) => (
              <li key={index} className="py-4 px-10 w-full">
                <NavLink to={to} className={({ isActive }) => getStyle(to, isActive)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row justify-around py-2">
          {
            !!social.length && social.map((social, index) => (
              <div key={index} className="w-6">
                <a className='text-slate-100' href={social.url} target="_blank" rel="noreferrer">
                  <img src={social.url_icon} alt={social.name} />
                </a>
              </div>
            ))
          }
        </div>
      </menu>
    </>
  )
}

export default SideMenu
