import { useEffect, useState } from 'react'
import CloseButton from '../CloseButton'
import Styles from './styles'

export type AlertProps = {
  title: string
  type: 'alert' | 'error' | 'message'
}

const Alert = ({ title, type }: AlertProps) => {
  const colors = {
    alert: 'bg-yellow-500 text-slate-700',
    message: 'bg-mck_aqua text-slate-900',
    error: 'bg-mck_red text-slate-200'
  }
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    setIsClosed(!title)
  }, [title])

  return (
    <Styles.Main $isClosed={isClosed} $color={colors[type]} role="alert">
      <Styles.Wrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Button
          onClick={() => setIsClosed(true)}
          $isClosed={isClosed}
          $color={colors[type]}
        >
          <CloseButton />
        </Styles.Button>
      </Styles.Wrapper>
    </Styles.Main>
  )
}

export default Alert
