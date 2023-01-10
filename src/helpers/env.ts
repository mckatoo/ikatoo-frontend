const env = (key: string) => {
  if (import.meta.env[key] === undefined)
    console.error(`*** ${key} IS UNDEFINED. ***`)
  return `${import.meta.env[key] ?? ''}`
}

export default {
  VITE_GITHUB_CLIENT_ID: env('VITE_GITHUB_CLIENT_ID'),
  VITE_REDIRECT_URL: env('VITE_REDIRECT_URL')
}
