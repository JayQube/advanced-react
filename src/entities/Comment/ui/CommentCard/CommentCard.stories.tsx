import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import localAdminAvatarImage from 'shared/assets/storybook/admin_avatar.jpg';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
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
      id: '1',
      username: 'admin',
      avatar: localAdminAvatarImage,
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    id: '1',
    text: 'text',
    user: {
      id: '1',
      username: 'admin',
      avatar: localAdminAvatarImage,
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
  },
  isLoading: true,
};
