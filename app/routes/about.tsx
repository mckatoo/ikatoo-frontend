import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { TextContainer } from '~/components/TextContainer'
import SideMenu from '~/components/SideMenu'

type AboutProps = {
  skills: string[]
  title?: string
  describe: string
  image?: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const about: AboutProps = {
    skills: [
      "ES5/ES6",
      "Node JS",
      "HTML",
      "CSS",
      "TypeScript",
      "REST",
      "JSON",
      "Wordpress",
      "Git",
      "Bootstrap",
      "ReactJS",
      "SQl",
      "npm",
      "PHP",
      "JAVA"
    ],
    title: 'Olá. Bem vindo❗',
    describe: '<p>Me chamo Milton Carlos Katoo, moro em Itapira, interior de São Paulo/Brasil. Pai de uma princesa e filho de excelente cozinheira Italiana e um saldoso Japonês faz tudo, sou um desenvolvedor full-stack que ama programação e desenvolvimento de software afim de melhorar a vida das pessoas.</p><p>Pessoa bem organizada, solucionador de problemas, funcionário independente com alta atenção aos detalhes.Fã de animes, mangas, games, séries de TV e filmes. Uma pessoa de família e pai de uma princesa.</p><p>Interessado em todo o espectro de programação e trabalhar em projetos ambiciosos com pessoas positivas.</p><a class="text-mck_aqua underline underline-offset-8" href="https://ikatoo.com.br/contact/" rel="contact"><span>🎉</span>Vamos fazer algo especial.</a><span>😄</span>',
    image: '/images/pai.png'
  }

  return about
}

export const meta: MetaFunction = () => ({
  title: "iKatoo - Milton Carlos Katoo - Desenvolvedor Web"
})

export default () => {
  const { describe, title, image } = useLoaderData<AboutProps>()

  return <div className="flex flex-row bg-mck_black_light h-full w-full">
    <SideMenu />

    <div className={!image ? 'w-full' : 'w-1/2'}>
      {!!title && (
        <TextContainer title={title}>
          <div dangerouslySetInnerHTML={{ __html: describe }} />
        </TextContainer>
      )}
    </div>
    {!!image && (
      <div className='w-1/2 flex items-center justify-center'>
        <div
          className='
          w-full
          h-full
          bg-center
          bg-no-repeat
          bg-[url("/images/pai.png")]
          shadow-mck_black_light
          shadow-image
        '
        />
      </div>
    )}

  </div>
}