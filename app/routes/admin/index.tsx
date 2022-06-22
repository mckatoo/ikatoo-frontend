import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { GitHubProfile } from "remix-auth-github";

import { auth } from "~/auth.server";
import type { SideMenuProps } from "~/components/SideMenu";
import SideMenu from "~/components/SideMenu";

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: "/" });
};

type LoaderData = { profile: GitHubProfile, sideMenuData: SideMenuProps };

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = await auth.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });

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

  return json<LoaderData>({ profile, sideMenuData });
};

export default function Admin() {
  const { profile, sideMenuData } = useLoaderData<LoaderData>();
  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    <SideMenu {...sideMenuData} />

    <div className='flex flex-col w-max items-start'>
      <div className="flex flex-row w-full bg-slate-800 justify-end">
        <Form method="post">
          <button>Log Out</button>
        </Form>
      </div>

      <div className="flex flex-row w-full">
        <pre>
          <code>{JSON.stringify(profile, null, 2)}</code>
        </pre>
      </div>

      {/* <div className='flex flex-row w-1/2'>
        {!!title && (
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: describe }} />
          </TextContainer>
        )}
      </div>

      {
        !image ? (
          <div className='flex w-1/2 h-full items-center justify-center'>
            <IconCloud slugs={skills} />
          </div>
        ) : (
          <div className='flex w-1/2 justify-center'>
            <img src={image.src} alt={image.alt} />
          </div>
        )
      } */}
    </div>
  </div>
}