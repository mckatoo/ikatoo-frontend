import IconCloud from '../../components/IconCloud'
import { TextContainer } from '../../components/TextContainer'

type AboutProps = {
  skills: string[]
  title?: string
  description: string
  image?: {
    src: string
    alt: string
  }
}

export const About = () => {
  const about: AboutProps = {
    skills: [
      'javascript',
      'dotnet',
      'nodedotjs',
      'html5',
      'css3',
      'typescript',
      'jest',
      'json',
      'git',
      'bootstrap',
      'react',
      'mysql',
      'npm',
      'php',
      'java'
    ],
    title: 'Olá. Bem vindo❗',
    description:
      '<p>Me chamo Milton Carlos Katoo, moro em Itapira, interior de São Paulo/Brasil. Pai de uma princesa e filho de excelente cozinheira Italiana e um saldoso Japonês faz tudo, sou um desenvolvedor full-stack que ama programação e desenvolvimento de software afim de melhorar a vida das pessoas.</p><p>Pessoa bem organizada, solucionador de problemas, funcionário independente com alta atenção aos detalhes.Fã de animes, mangas, games, séries de TV e filmes. Uma pessoa de família e pai de uma princesa.</p><p>Interessado em todo o espectro de programação e trabalhar em projetos ambiciosos com pessoas positivas.</p><a class="text-mck_aqua underline underline-offset-8" href="https://ikatoo.com.br/contact/" rel="contact"><span>🎉</span>Vamos fazer algo especial.</a><span>😄</span>'
  }
  const { description, title, image, skills } = about

  return (
    <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
      <div className="flex flex-row items-start ml-4 mt-4">
        <div className="flex flex-row w-1/2">
          {!!title && (
            <TextContainer title={title}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </TextContainer>
          )}
        </div>

        {!image ? (
          <div className="flex w-1/2 h-full items-center justify-center">
            <IconCloud slugs={skills} />
          </div>
        ) : (
          <div className="flex w-1/2 justify-center">
            <img src={image.src} alt={image.alt} />
          </div>
        )}
      </div>
    </div>
  )
}
