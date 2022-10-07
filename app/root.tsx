import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { SideMenuProps } from './components/SideMenu';
import SideMenu from './components/SideMenu';
import api from './services/api';
import styles from './tailwind.css';

type LoaderData = {
  sideMenuData: SideMenuProps
}

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

export const loader: LoaderFunction = async () => {

  const { data } = await api.get('/social-links')
  const menu: SideMenuProps = {
    links: [
      {
        label: 'Sobre',
        to: 'about'
      },
      {
        label: 'Habilidades',
        to: 'skills'
      },
      {
        label: 'Projetos',
        to: 'projects'
      },
      {
        label: 'Contato',
        to: 'contact'
      },
    ],
    social: data
  }

  return json<LoaderData>({ sideMenuData: menu })
}

const App = () => {
  const { sideMenuData } = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-gray-400 bg-mck_black_light font-body flex">

        <div className="h-screen flex flex-cols">
          <SideMenu {...sideMenuData} />
          <div className="h-screen overflow-y-auto">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
        </div>
      </body>
    </html>
  );
}

export default App
