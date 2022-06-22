import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import type { CardProps } from '~/components/Card';
import Card from '~/components/Card'
import SideMenu from '~/components/SideMenu'

import { useLoaderData } from '@remix-run/react'

type ProjectProps = {
  snapshot: string
  description: CardProps
  githubLink?: string
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const projects: ProjectProps[] = [
    {
      snapshot: '/images/snap-calm.png',
      description: {
        title: 'Calm Organizador de Criptomoedas',
        subTitle: 'Last update: 2022 - 03',
        content: 'Personal project for learn nextjs.',
      },
      githubLink: 'https://github.com/mckatoo/calm'
    },
    {
      snapshot: '/images/ikatoo.png',
      description: {
        title: 'iKatoo - Site pessoal',
        subTitle: 'Last update: 2022 - 08',
        content: 'Personal Web Site.',
      },
      githubLink: 'https://github.com/mckatoo/ikatoo-frontend'
    },
    // {
    //   snapshot: '/images/snap-calm.png',
    //   description: {
    //     title: 'Calm Organizador de Criptomoedas',
    //     subTitle: '2022 - 03',
    //     content: 'Projeto pessoal para estudo.',
    //   }
    // },
    // {
    //   snapshot: '/images/snap-calm.png',
    //   description: {
    //     title: 'Calm Organizador de Criptomoedas',
    //     subTitle: '2022 - 03',
    //     content: 'Projeto pessoal para estudo.',
    //   }
    // },
  ]

  return projects
}

export const meta: MetaFunction = () => ({
  title: "Milton Carlos Katoo - Projetos"
})

export default () => {
  const projects = useLoaderData<ProjectProps[]>()

  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    <SideMenu />

    <div className='flex flex-row items-start ml-4 mt-4'>
      <div className='flex flex-row w-full'>
        <div className="flex flex-col gap-4 divide-y divide-slate-700">
          {
            projects.map(({ description, snapshot, githubLink }, index) => {
              const renderProjects = () => <div key={index} className="flex flex-row pt-4">
                {
                  (index % 2) === 0 ? (
                    <>
                      <div className="w-1/2 flex justify-center items-center">
                        <Card {...description} />
                      </div>
                      <div className="w-1/2 flex justify-center items-center mr-4">
                        <img src={snapshot} alt={description.title} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 flex justify-center items-center">
                        <img src={snapshot} alt={description.title} />
                      </div>
                      <div className="w-1/2 flex justify-center items-center mr-4">
                        <Card {...description} />
                      </div>
                    </>
                  )
                }
              </div>

              return !githubLink ? (
                <div key={index}>
                  {renderProjects()}
                </div>
              ) : (
                <a key={index} href={githubLink}>
                  {renderProjects()}
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  </div>
}
