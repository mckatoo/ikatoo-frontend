export type ResponseCreateAboutPageType = {
  id: string
  title: string
  description: string
  user_id: string
  image: {
    alt: string
    src: string
  }
}

export type AboutPageServiceType = {
  title: string
  description: string
  user_id: string
}
