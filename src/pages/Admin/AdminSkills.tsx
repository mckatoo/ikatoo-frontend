import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Session, { SessionProps } from "../../components/Session";
import api from "../../services/api";

export const AdminSkills = () => {
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

  return <>
    {!!error && <Alert title={error} type={"error"} />}
    <Session {...user} />
  </>
}