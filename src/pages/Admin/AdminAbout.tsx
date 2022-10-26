import Alert from "../../components/Alert";
import { FormContainer } from "../../components/FormContainer";
import Session, { SessionProps } from "../../components/Session";
import { TextContainer } from "../../components/TextContainer";

export const AdminAbout = () => {

  const user: SessionProps = {
    avatar: {
      url: 'https://avatars.githubusercontent.com/u/7876852?s=40&v=4',
      alt: 'Milton and the daughter.'
    }
  }

  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    <Session {...user} />
    <div className='flex flex-row items-start ml-4 mt-4'>
      <div className='flex flex-row w-1/2'>
        <TextContainer title={'Informações sobre você.'}>
          <FormContainer>

          </FormContainer>
        </TextContainer>
      </div>
    </div>
  </div>
}