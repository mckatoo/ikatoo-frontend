import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Menu from '.'
import { mockedMenu } from './mock'

export default {
  title: 'Components/Menu',
  component: Menu,
  args: mockedMenu,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
  ]
} as ComponentMeta<typeof Menu>

export const Default = {} as ComponentStory<typeof Menu>
export const Mobile = {} as ComponentStory<typeof Menu>
