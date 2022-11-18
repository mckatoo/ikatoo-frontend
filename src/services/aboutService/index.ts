import api from '../api'

type ResponseCreateAboutPageType = {
  id: string
  title: string
  description: string
  user_id: string
  image: {
    alt: string
    src: string
  }
}

const getHeaders = () => {
  const token = localStorage.getItem('IKATOO_AuthToken') ?? ''

  return {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
}

export default {
  create: async ({
    title,
    description,
    user_id
  }: Omit<ResponseCreateAboutPageType, 'id' | 'image'>) => {
    await api.post<ResponseCreateAboutPageType>(
      '/about',
      {
        title,
        description,
        user_id
      },
      getHeaders()
    )
  }
}
