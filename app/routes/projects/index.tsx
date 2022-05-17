import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import SideMenu from '~/components/SideMenu'

export const loader: LoaderFunction = async ({ params, request }) => {
  return {}
}

export const meta: MetaFunction = () => ({
  title: "Milton Carlos Katoo - Projetos"
})

export default () => {
  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    <SideMenu />

    <div className='flex flex-row items-start ml-52 mt-4'>
      <div className='flex flex-row w-full'>

      </div>
    </div>
  </div>
}