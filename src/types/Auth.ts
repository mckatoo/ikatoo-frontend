export type AuthResponseType = {
  user: {
    id: string
    name: string
    username: string
    email: string
  }
  accessToken: string
  refreshToken: string
}

export type SignInProps = {
  password: string
  username?: string
  email?: string
}
