import React, { useCallback, useState } from 'react';
import api from '~/services/api';

import { SideMenuContext } from './useSideMenu';

import type { SideMenuContextProps } from './useSideMenu';
type SideMenuProviderProps = {
  children: React.ReactNode
}

const SideMenuProvider = ({ children }: SideMenuProviderProps) => {
  const [sideMenu, setSideMenu] = useState({
    links: [],
    social: {
      github: '',
      linkedin: '',
      youtube: ''
    },
  })

  const getMenu = async (menuName: string) => {
    const { data: { links, social } } = await api.post('/menu', { menuName })
    setSideMenu({
      links,
      social
    })
  }

  const contextValues: SideMenuContextProps = {
    ...sideMenu,
    getMenu: useCallback((menuName: string) => getMenu(menuName), [])
  }

  return (
    <SideMenuContext.Provider value={contextValues} >
      {children}
    </SideMenuContext.Provider>
  )
}

export default SideMenuProvider