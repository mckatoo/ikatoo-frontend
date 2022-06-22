import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { GitHubProfile } from "remix-auth-github";

import { auth } from "~/auth.server";
import SideMenu from "~/components/SideMenu";

type LoaderData = { profile: GitHubProfile };

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: "/" });
};

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = await auth.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });

  return json<LoaderData>({ profile });
};

export default function Admin() {
  const { profile } = useLoaderData<LoaderData>();
  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    <SideMenu />

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