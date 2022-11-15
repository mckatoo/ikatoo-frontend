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
  }
} as ComponentMeta<typeof TextInput>

export const Default: ComponentStory<typeof TextInput> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)

export const withError: ComponentStory<typeof TextInput> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)
withError.args = {
  error: 'Ops...something is wrong'
}
