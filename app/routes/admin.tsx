import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { SideMenuProps } from "~/components/SideMenu";
import SideMenu from "~/components/SideMenu";
import api from "../services/api";

type LoaderData = { sideMenuData: SideMenuProps };

export const loader: LoaderFunction = async () => {
  const {data} = await api.post('/menu', { menu: 'admin' })

  return json<LoaderData>({ sideMenuData: data })
};

export default () => {
  const { sideMenuData } = useLoaderData<LoaderData>();
  return <>
    <SideMenu {...sideMenuData} />

    <Outlet />
  </>
}
