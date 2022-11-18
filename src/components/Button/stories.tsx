import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Github } from '@styled-icons/boxicons-logos'
import { Angry, Laugh } from '@styled-icons/boxicons-regular'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} />
  </div>
)

export const WithLabel: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args}>Button</Button>
  </div>
)

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args}>GitHub</Button>
  </div>
)
WithIcon.args = {
  icon: <Github />
}

export const Block: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args}>GitHub</Button>
  </div>
)
Block.args = {
  icon: <Github />,
  block: true
}

export const Types: ComponentStory<typeof Button> = () => (
  <div className="flex gap-2">
    <Button styleType="default">Default</Button>
    <Button styleType="primary" icon={<Laugh />}>
      Primary
    </Button>
    <Button styleType="secondary" icon={<Angry />}>
      Secondary
    </Button>
  </div>
)
