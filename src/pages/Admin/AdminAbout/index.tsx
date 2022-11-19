import Button from '../../../components/Button'
import { FormContainer } from '../../../components/FormContainer'
import TextArea from '../../../components/TextArea'
import { TextContainer } from '../../../components/TextContainer'
import TextInput from '../../../components/TextInput'
import useAuth from '../../../hooks/useAuth'
import aboutService from '../../../services/aboutService'
import Styles from './styles'

type FormFields = {
  title: { value: string }
  description: { value: string }
}

export const AdminAbout = () => {
  const auth = useAuth()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const {
      title: { value: title },
      description: { value: description }
    } = event.currentTarget as unknown as FormFields

    if (title && description) {
      aboutService.create({ title, description, user_id: `${auth.user?.id}` })
    }
  }

  return (
    <Styles.Wrapper>
      <TextContainer title={'Informações sobre você.'}>
        <FormContainer>
          <Styles.Form onSubmit={handleSubmit} method="post">
            <Styles.TextWrapper>
              <TextInput
                labelColor="white"
                label="Título"
                name="title"
                placeholder="Título"
              />
            </Styles.TextWrapper>
            <TextArea
              label="Descrição"
              labelColor="white"
              name="description"
              placeholder="Descrição"
            />

            <Styles.Actions>
              <Button styleType="primary">Salvar</Button>
            </Styles.Actions>
          </Styles.Form>
        </FormContainer>
      </TextContainer>
    </Styles.Wrapper>
  )
}
