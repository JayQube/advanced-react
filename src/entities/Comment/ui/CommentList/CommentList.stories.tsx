import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import localAdminAvatarImage from 'shared/assets/storybook/admin_avatar.jpg';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'Hello world',
      user: { id: '1', username: 'admin', avatar: localAdminAvatarImage },
    },
    {
      id: '2',
      text: 'Hello world 2',
      user: { id: '2', username: 'user', avatar: localAdminAvatarImage },
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  comments: [
    {
      id: '1',
      text: 'Hello world',
      user: { id: '1', username: 'admin', avatar: localAdminAvatarImage },
    },
    {
      id: '2',
      text: 'Hello world 2',
      user: { id: '2', username: 'user', avatar: localAdminAvatarImage },
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
