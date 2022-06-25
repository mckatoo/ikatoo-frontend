import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import type { SideMenuProps } from "./components/SideMenu";
import SideMenu from "./components/SideMenu";
import api from "./services/api";

import styles from './tailwind.css';

export function links() {
  return [
    { rel: "stylesheet", href: styles }
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Milton Carlos Katoo",
  viewport: "width=device-width,initial-scale=1",
});


type LoaderData = {
  sideMenuData: SideMenuProps
}

export const loader: LoaderFunction = async ({ params }) => {

  const {data} = await api.post('/menu', { menu: 'public' })

  return json<LoaderData>({ sideMenuData: data })
}

export default function App() {
  const { sideMenuData } = useLoaderData<LoaderData>()
  console.log('sideMenuData:', sideMenuData)

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-gray-400 bg-mck_black_light font-body flex">
        <SideMenu {...sideMenuData} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
