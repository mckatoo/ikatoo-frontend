import Card, { CardProps } from '../../components/Card'
import ProgressBar from '../../components/ProgressBar'
import { TextContainer } from '../../components/TextContainer'
import { mockSkillsPageData } from './mock'
import Styles from './styles'

export type SkillsProps = {
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

export const Skills = () => {
  const skillsPage = mockSkillsPageData

  const { description, title, skills, lastJobs } = skillsPage

  return (
    <Styles.Wrapper>
      <Styles.Text>
        {!!title && (
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TextContainer>
        )}
      </Styles.Text>

      {!!(!!skills.length || !!lastJobs.length) && (
        <Styles.Skills>
          {!!skills.length && (
            <Styles.Progress>
              <Styles.Subtitle>Estudo</Styles.Subtitle>
              {skills.map(({ skillTitle, rankPercent }, index) => (
                <ProgressBar
                  key={index}
                  label={skillTitle}
                  percent={rankPercent}
                />
              ))}
            </Styles.Progress>
          )}

          {!!lastJobs.length && (
            <Styles.JobsWrapper>
              <Styles.Subtitle>Últimos Trabalhos</Styles.Subtitle>
              <Styles.Jobs>
                {lastJobs.map(
                  (
                    { jobTitle, jobDescription, yearMonthStart, yearMonthEnd },
                    index
                  ) => {
                    const content: CardProps = {
                      title: jobTitle,
                      subTitle: `${yearMonthStart} | ${yearMonthEnd || 'Hoje'}`,
                      content: jobDescription
                    }

                    return <Card stretch key={index} {...content} />
                  }
                )}
              </Styles.Jobs>
            </Styles.JobsWrapper>
          )}
        </Styles.Skills>
      )}
    </Styles.Wrapper>
  )
}
