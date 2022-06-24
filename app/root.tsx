import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import type { SideMenuProps } from "./components/SideMenu";
import SideMenu from "./components/SideMenu";

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
  const sideMenuData: SideMenuProps = {
    links: [
      { label: "Sobre", to: "about" },
      { label: "Habilidades", to: "skills" },
      { label: "Projetos", to: "projects" },
      { label: "Contatos", to: "contact" },
    ],
    social: {
      linkedin: "mckatoo",
      github: "mckatoo",
      youtube: "UCc1e1mclC9o5OnQU87PcU1g",
    }
  }

  return json<LoaderData>({ sideMenuData })
}

export default function App() {
  const { sideMenuData } = useLoaderData<LoaderData>()

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
