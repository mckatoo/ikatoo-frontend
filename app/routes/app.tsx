import { json, LoaderFunction } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import SideMenu, { SideMenuProps } from "~/components/SideMenu"
import api from "~/services/api"

type LoaderData = {
  sideMenuData: SideMenuProps
}

export const loader: LoaderFunction = async () => {

  const { data } = await api.post('/menu', { menu: 'public' })

  return json<LoaderData>({ sideMenuData: data })
}

export default () => {
  const { sideMenuData } = useLoaderData<LoaderData>();
  return <>
    <div className="h-screen flex flex-cols">
      <SideMenu {...sideMenuData} />
      <div className="h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>

  </>
}
