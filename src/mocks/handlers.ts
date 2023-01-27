import { rest } from 'msw'

import { aboutPageMock } from './aboutPageMock'
import env from '../helpers/env'

export const handlers = [
  // Handles/about request
  rest.get(`${env.VITE_API_URL}/about`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(aboutPageMock))
  })
]
