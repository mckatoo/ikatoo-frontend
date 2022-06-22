import { createContext } from 'react';

import type { SideMenuProps } from '~/components/SideMenu'

export type SideMenuContextProps = SideMenuProps & {
  getMenu: (menuName: string) => Promise<void>
}

const SideMenuContext = createContext<SideMenuContextProps>({
  links: [],
  social: {
    github: '',
    linkedin: '',
    youtube: ''
  },
  getMenu: () => Promise.resolve()
})

function useSideMenu() {
  return SideMenuContext
}

export {SideMenuContext, useSideMenu}