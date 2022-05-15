import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { TextContainer } from '~/components/TextContainer'
import SideMenu from '~/components/SideMenu'
import IconCloud from '~/components/IconCloud'

type SkillsProps = {
  skills: [{
    skillTitle: string
    rankPercent: number
  }]
  title?: string
  description: string
  lastJobs: [{
    yearStart: string
    yearEnd?: string
    jobTitle: string
    jobDescription: string
  }]
}

export const loader: LoaderFunction = async ({ params }) => {
  const skills: SkillsProps = {
    skills: [
      {skillTitle: 'Back-end', rankPercent: 80},
      {skillTitle: 'Modelagem de dados', rankPercent: 80},
      {skillTitle: 'Front-end', rankPercent: 30},
      {skillTitle: 'Trabalho em equipe', rankPercent: 70},
    ]
  }

  return skills
}

export const meta: MetaFunction = () => ({
  title: "iKatoo - Milton Carlos Katoo - Desenvolvedor Web"
})

export default () => {
  const { describe, title, image, skills } = useLoaderData<SkillsProps>()

  return <div className="flex flex-row bg-mck_black_light h-screen w-full">
    <SideMenu />

    <div className='flex flex-row items-start ml-52 mt-4 bg-mck_black_light'>
      <div className='flex flex-row w-1/2'>
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
      }
    </div>
  </div>
}