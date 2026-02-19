import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const UserIsAuthor = Template.bind({});
UserIsAuthor.args = {};
UserIsAuthor.decorators = [
  StoreDecorator({
    articleDetails: {
      data: {
        user: {
          id: '1', // ID автора статьи
        },
      },
    },
    user: {
      authData: {
        id: '1', // Тот же ID, что и у автора
      },
    },
    ui: {
      scroll: {},
    },
  }),
];

export const UserIsNotAuthor = Template.bind({});
UserIsNotAuthor.args = {};
UserIsNotAuthor.decorators = [
  StoreDecorator({
    articleDetails: {
      data: {
        user: {
          id: '1', // ID автора статьи
        },
      },
    },
    user: {
      authData: {
        id: '2', // Другой ID, не совпадает с автором
      },
    },
    ui: {
      scroll: {},
    },
  }),
];
