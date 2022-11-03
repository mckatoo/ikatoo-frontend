import { ComponentMeta, ComponentStory } from '@storybook/react'

import Alert from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'This is a test',
    type: 'alert'
  }
} as ComponentMeta<typeof Alert>

export const Default = {} as ComponentStory<typeof Alert>
