import { ComponentMeta, ComponentStory } from '@storybook/react'

import Alert from '.'
import { useAlert } from '../../hooks/useAlert'

export default {
  title: 'Components/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

export const WithAlert = {} as ComponentStory<typeof Alert>
WithAlert.decorators = [
  (Story) => {
    const { setAlert } = useAlert()
    setAlert({
      title: 'Alert Message',
      type: 'alert'
    })
    return Story()
  }
]

export const WithError = {} as ComponentStory<typeof Alert>
export const WithMessage = {} as ComponentStory<typeof Alert>
