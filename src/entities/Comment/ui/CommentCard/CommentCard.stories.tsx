import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'text',
    user: {
      avatar: undefined,
      id: '1',
      username: 'username',
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    id: '1',
    text: 'text',
    user: {
      avatar: undefined,
      id: '1',
      username: 'username',
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
