import IconCloud from '../../components/IconCloud'
import { TextContainer } from '../../components/TextContainer'
import Styles from './styles'

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
    <Styles.Wrapper>
      <Styles.Text>
        {!!title && (
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TextContainer>
        )}
      </Styles.Text>

      {!image ? (
        <Styles.Skills>
          <IconCloud slugs={skills} />
        </Styles.Skills>
      ) : (
        <Styles.ImageWrapper>
          <img src={image.src} alt={image.alt} />
        </Styles.ImageWrapper>
      )}
    </Styles.Wrapper>
  )
}
