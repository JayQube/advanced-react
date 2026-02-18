import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from 'entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilter',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      type: ArticleType.ALL,
    },
  }),
];
