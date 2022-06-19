import type { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.name}`, {
    headers: {
      accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    }
  })

  return {
    user: await res.json(),
  }
}

export default () => {
  const { user } = useLoaderData()

  return <h1>{user.login}</h1>
}
