const auth = () => {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
  const params = new URLSearchParams([
    ['response_type', 'code'],
    ['scope', 'user'],
    ['client_id', `${import.meta.env.VITE_GITHUB_CLIENT_ID}`],
    ['state', 'test-t5']
  ]).toString()
  const url = `${GITHUB_AUTH_URL}?${params}`
  window.location.assign(url)
  // return url
}

export default auth
