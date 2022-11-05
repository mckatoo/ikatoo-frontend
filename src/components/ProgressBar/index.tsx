import Styles from './styles'

export type ProgressBarProps = {
  label: string
  percent: number
}

const ProgressBar = ({ label, percent }: ProgressBarProps) => (
  <Styles.Wrapper>
    <span>{label}</span>
    <Styles.WrapperBar>
      <Styles.Bar style={{ width: `${percent}%` }} />
    </Styles.WrapperBar>
  </Styles.Wrapper>
)

export default ProgressBar
