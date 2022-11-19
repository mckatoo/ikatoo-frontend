import { ResponseCreateAboutPageType } from '../../types/AboutPage'
import api from '../api'

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
