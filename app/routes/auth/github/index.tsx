import type { ActionFunction } from "@remix-run/node";

import { auth } from "~/auth.server";

export const action: ActionFunction = async ({ request }) => {
  console.log('auth github data', request)
  
  return await auth.authenticate("github", request, {
    successRedirect: "/admin",
    failureRedirect: "/",
  });
};