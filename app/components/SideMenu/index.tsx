import { NavLink } from '@remix-run/react'

import Logo from '../Logo'

export type SideMenuItem = {
  label: string
  to: string
}

type SocialUsernameProps = {
  linkedin: string
  github: string
  youtube: string
}

const links: SideMenuItem[] = [
  { label: "Sobre", to: "about" },
  { label: "Habilidades", to: "skills" },
  { label: "Projetos", to: "projects" },
  { label: "Contatos", to: "contact" },
  { label: "Blog", to: "blog" },
]

const social: SocialUsernameProps = {
  linkedin: "mckatoo",
  github: "mckatoo",
  youtube: "UCc1e1mclC9o5OnQU87PcU1g",
}

const SideMenu = () => {
  const { github, linkedin, youtube } = social

  return (
    <>
      <menu
        aria-label="Side Menu"
        className="
          text-center
          fixed
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
          <Logo aria-label="Logotipo" />
        </div>

        <div className="text-lg">
          <ul className="list-reset border-slate-700 border-y-2 divide-y divide-slate-700 font-semibold">
            {links.map(({ label, to }, index) => (
              <li key={index} className="py-4 px-10 w-full">
                <NavLink prefetch='intent' to={`/${to}`} className={({ isActive }) => isActive ? 'text-mck_aqua' : ''}>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row justify-around py-2">
          <div className="w-6">
            {!!linkedin && <a className='text-slate-100' href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-5x">
                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
              </svg>
            </a>}
          </div>
          <div className="w-6">
            {!!github && <a className='text-slate-100' href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg-inline--fa fa-github fa-w-16 fa-3x">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className="">
                </path>
              </svg>
            </a>}
          </div>
          <div className="w-6">
            {!!youtube && <a className='text-slate-100' href={`https://www.youtube.com/channel/${youtube}`} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-youtube-square fa-w-14 fa-5x">
                <path fill="currentColor" d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z">
                </path>
              </svg>
            </a>}
          </div>
        </div>
      </menu>
    </>
  )
}

export default SideMenu