import { FormContainer } from '../../../components/FormContainer'
import { TextContainer } from '../../../components/TextContainer'
import Styles from './styles'

export const AdminAbout = () => {
  return (
    <Styles.Wrapper>
      <TextContainer title={'Informações sobre você.'}>
        <FormContainer>form</FormContainer>
      </TextContainer>
    </Styles.Wrapper>
  )
}
