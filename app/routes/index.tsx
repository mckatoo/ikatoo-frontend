import type { LoaderFunction } from '@remix-run/node'
import type { SideMenuItem } from '~/components/SideMenu'

import { useLoaderData } from '@remix-run/react'
import SideMenu from '~/components/SideMenu'

type HomeProps = {
  sideMenuContent: SideMenuItem[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const sideMenuContent = [
    { label: "Sobre", to: "sobre" },
    { label: "Habilidades", to: "habilidades" },
    { label: "Projetos", to: "projetos" },
    { label: "Contato", to: "contato" },
    { label: "Blog", to: "blog" },
  ]

  return { sideMenuContent }
}

export default () => {
  const { sideMenuContent } = useLoaderData<HomeProps>()

  return <>
    <SideMenu items={sideMenuContent} />
  </>
}