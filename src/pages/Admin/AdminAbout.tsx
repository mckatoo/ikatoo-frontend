import { FormContainer } from '../../components/FormContainer'
import { TextContainer } from '../../components/TextContainer'

export const AdminAbout = () => {
  return (
    <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
      <div className="flex flex-row items-start ml-4 mt-4">
        <div className="flex flex-row w-1/2">
          <TextContainer title={'Informações sobre você.'}>
            <FormContainer>form</FormContainer>
          </TextContainer>
        </div>
      </div>
    </div>
  )
}
