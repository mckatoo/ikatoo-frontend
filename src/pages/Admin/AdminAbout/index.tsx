import { FormContainer } from '../../../components/FormContainer'
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
          <form onSubmit={handleSubmit} method="post">
            <TextInput name="title" />
            <TextInput name="description" />
          </form>
        </FormContainer>
      </TextContainer>
    </Styles.Wrapper>
  )
}
