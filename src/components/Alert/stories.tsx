import { ComponentMeta, ComponentStory } from '@storybook/react'

import Alert from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'This is a alert',
    type: 'alert'
  }
} as ComponentMeta<typeof Alert>

export const WithAlert = {} as ComponentStory<typeof Alert>
export const WithError = {
  args: {
    title: 'Error message',
    type: 'error'
  }
} as ComponentStory<typeof Alert>
export const WithMessage = {
  args: {
    title: 'Notify',
    type: 'message'
  }
} as ComponentStory<typeof Alert>
