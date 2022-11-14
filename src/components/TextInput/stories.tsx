import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import TextInput from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  decorators: [(Styles) => <div className="max-w-xs p-4">{Styles()}</div>]
} as ComponentMeta<typeof TextInput>

export const Default = {} as ComponentStory<typeof TextInput>
export const WithError = {
  args: {
    error: 'Ops...something is wrong'
  }
} as ComponentStory<typeof TextInput>
