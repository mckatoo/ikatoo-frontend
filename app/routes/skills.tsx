import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import type { CardProps } from '~/components/Card';
import Card from '~/components/Card'
import ProgressBar from '~/components/ProgressBar'
import SideMenu from '~/components/SideMenu'
import { TextContainer } from '~/components/TextContainer'

import { useLoaderData } from '@remix-run/react'

type SkillsProps = {
  title: string
  description: string
  skills: {
    skillTitle: string
    rankPercent: number
  }[]
  lastJobs: {
    yearMonthStart: string
    yearMonthEnd?: string
    jobTitle: string
    jobDescription: string
  }[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const skills: SkillsProps = {
    title: 'Habilidades e Experiências',
    description: `<p>Trabalhei como programador em VBA usando o MS Access em 2003, logo após formado no curso técnico do SENAC. Não dei muita sorte pois a empresa fechou 3 meses após eu entrar.</p>
    <p>Precisando de emprego mudei de área, fui trabalhar em uma grande indústria farmacêutica da cidade e lá fiquei durante 7 anos trabalhando como operador de máquinas na produção de medicamentos injetáveis, mas sempre com um pézinho na programação. Lá eu criei um programa em Delphi 7 com banco em MS Access para controle de produção de medicamentos liofilizados que utilizávamos para melhorar o fluxo de produção do setor e diminuir o tempo nos processos de fabricação.</p>
    <p>Sempre estudando banco de dados e programação, em 2013 surgiu uma oportunidade na faculdade onde trabalhei e estudei até julho de 2021.</p>
    <p>Lá atuei principalmente na manutenção e implementação de rede de computadores com 3 laboratórios de informática, departamentos administrativos e outros departamentos academicos. Implementei uma revista eletronica "Consciesi" e desenvolvi pequenas ferramentas para auxiliar o sistema administrativo e acadêmico.</p>
    <p>Atualmente estou desempregado procurando novas oportunidades.</p>
    <p>Visite meu perfil no <a target="_blank" href="https://linkedin.com/in/mckatoo">LinkedIn</a> para mais detalhes ou entre em <a href="/contact">contato</a> comigo.`,
    skills: [
      { skillTitle: 'Back-end', rankPercent: 20 },
      { skillTitle: 'Modelagem de dados', rankPercent: 30 },
      { skillTitle: 'Front-end', rankPercent: 70 },
      { skillTitle: 'Trabalho em equipe', rankPercent: 85 },
    ],
    lastJobs: [
      {
        jobTitle: 'Calm Organizador de Criptomoedas',
        jobDescription: 'Projeto pessoal para estudo.',
        yearMonthStart: '2022 - 03',
      },
      {
        jobTitle: 'Uniesi - Centro Universitário de Itapira',
        jobDescription: 'Responsável pela infraestrutura local e suporte dos serviços dispostos pela mantenedora UNIP.',
        yearMonthStart: '2013 - 06',
        yearMonthEnd: '2021 - 07'
      },
      {
        jobTitle: 'Itacom Veículos',
        jobDescription: 'Desenvolvimento do módulo venda de veículos do sistema de gerenciamento geral.',
        yearMonthStart: '2003 - 10',
        yearMonthEnd: '2003 - 12'
      },
    ]
  }

  return skills
}

export const meta: MetaFunction = () => ({
  title: "Milton Carlos Katoo - Desenvolvedor Web"
})

export default () => {
  const { description, title, skills, lastJobs } = useLoaderData<SkillsProps>()

  return <div className="flex flex-row min-h-fit h-full w-full">
    <SideMenu />

    <div className='flex flex-row items-start ml-52 mt-4'>
      <div className='flex flex-row w-1/2'>
        {!!title && (
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TextContainer>
        )}
      </div>

      {
        !!(!!skills.length || !!lastJobs.length) && (
          <div className='flex flex-col gap-16 w-1/2 h-full mt-20 m-4'>
            {!!skills.length && (
              <div className='w-full flex flex-col gap-4'>
                {skills.map(({ skillTitle, rankPercent }, index) => (
                  <ProgressBar key={index} label={skillTitle} percent={rankPercent} />
                ))}
              </div>
            )}

            {!!lastJobs.length && (
              <div className='w-full flex flex-wrap justify-center gap-4'>
                {lastJobs.map(({ jobTitle, jobDescription, yearMonthStart, yearMonthEnd }, index) => {
                  const content: CardProps = {
                    title: jobTitle,
                    subTitle: `${yearMonthStart} | ${yearMonthEnd || 'Hoje'}`,
                    content: jobDescription
                  }

                  return <Card key={index} {...content} />
                }
                )}
              </div>
            )}
          </div>
        )
      }
    </div>
  </div>
}