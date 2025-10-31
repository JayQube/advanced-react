import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  // Отображается на странице storybook
  title: 'shared/Modal',
  // Название компонента
  component: Modal,
  // Настраивает элементы управления в панели Storybook
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus in neque fermentum euismod vitae at augue.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus in neque fermentum euismod vitae at augue.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
