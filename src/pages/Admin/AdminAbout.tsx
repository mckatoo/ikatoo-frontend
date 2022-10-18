import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import { FormContainer } from "../../components/FormContainer";
import Session, { SessionProps } from "../../components/Session";
import { TextContainer } from "../../components/TextContainer";
import api from "../../services/api";

export const AdminAbout = () => {
  const [error, setError] = useState('');

  const githubAuth = async (code: string) => {
    try {
      const { data } = await api.post('auth/github', { code })
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
    }
  }

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const code = urlParams.get("code")
    !!code && githubAuth(code)
  }, []);

  const user: SessionProps = {
    email: 'teste@teste.com',
    avatar: {
      url: 'https://avatars.githubusercontent.com/u/7876852?s=40&v=4',
      alt: 'Milton and the daughter.'
    }
  }

  return <div className="flex flex-row bg-mck_black_light min-h-screen h-full w-full">
    {!!error && <Alert title={error} type={"error"} />}
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