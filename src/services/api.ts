import env from '../helpers/env'

const API_URL = env.VITE_API_URL

type CustomHeaders = {
  headers: HeadersInit
}

const httpFetch = async (
  resource: string,
  body: unknown,
  headers: CustomHeaders | undefined,
  method: 'POST' | 'PUT' | 'DELETE'
) => {
  return await fetch(`${API_URL}/${resource}`, {
    method,
    body: JSON.stringify(body),
    headers: headers?.headers || { 'Content-Type': 'application/json' }
  })
}

const api = {
  get: async <T>(resource: string) => {
    const result = await fetch(`${API_URL}/${resource}`)
    const data: T = await result.json()

    return { data }
  },
  post: async <T>(
    resource: string,
    body?: unknown,
    headers?: CustomHeaders
  ) => {
    const result = await httpFetch(resource, body, headers, 'POST')
    const data: T = await result.json()

    return { data }
  },
  put: async <T>(resource: string, body?: unknown, headers?: CustomHeaders) => {
    const result = await httpFetch(resource, body, headers, 'PUT')
    const data: T = await result.json()

    return { data }
  }
}

export default api
