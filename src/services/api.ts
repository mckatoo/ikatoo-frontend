import env from '../helpers/env'

const API_URL =
  env.VITE_API_URL[env.VITE_API_URL.length - 1] === '/'
    ? env.VITE_API_URL.slice(0, -1)
    : env.VITE_API_URL

type CustomHeaders = {
  headers: HeadersInit
}

const httpFetch = async (
  resource: string,
  body: unknown,
  headers: CustomHeaders | undefined,
  method: 'POST' | 'PUT' | 'DELETE'
) => {
  const validResource = resource[0] === '/' ? resource.slice(1) : resource

  return await fetch(`${API_URL}/${validResource}`, {
    method,
    body: JSON.stringify(body),
    headers: headers?.headers || { 'Content-Type': 'application/json' }
  })
}

const api = {
  get: async <T>(resource: string) => {
    const validResource = resource[0] === '/' ? resource.slice(1) : resource
    const result = await fetch(`${API_URL}/${validResource}`)
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
