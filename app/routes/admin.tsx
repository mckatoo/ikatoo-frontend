import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { SideMenuProps } from "~/components/SideMenu";
import SideMenu from "~/components/SideMenu";

type LoaderData = { sideMenuData: SideMenuProps };

export const loader: LoaderFunction = async ({ request }) => {
  const sideMenuData: SideMenuProps = {
    links: [
      { label: "Sobre", to: "about" },
      { label: "Habilidades", to: "skills" },
      { label: "Projetos", to: "projects" },
      { label: "Contatos", to: "contact" }
    ],
    social: {
      linkedin: "mckatoo",
      github: "mckatoo",
      youtube: "UCc1e1mclC9o5OnQU87PcU1g",
    }
  }

  return json<LoaderData>({ sideMenuData });
};

export default () => {
  const { sideMenuData } = useLoaderData<LoaderData>();
  return <>
    <SideMenu {...sideMenuData} />

    <Outlet />
  </>
}