import {
  AboutPageServiceType,
  ResponseCreateAboutPageType
} from '../../types/AboutPage'
import api from '../api'

const getHeaders = () => {
  const token = localStorage.getItem('IKATOO_AuthToken') ?? ''

  return {
    headers: {
      Authorization: `bearer ${token}`,
      ContentType: 'application/json'
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
  },
  get: async (userId: string) => {
    const { data } = await api.get<AboutPageServiceType>(
      `/about/user_id/${userId}`,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    return data
  }
}
