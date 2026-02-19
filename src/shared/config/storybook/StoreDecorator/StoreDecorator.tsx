import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// Для тестов и storybook
const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesPage: articlesPageReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  // articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  ui: () => ({ scroll: {} }), // Заглушка для ui редьюсера, чтобы не падало при сохранении позиции скролла
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  // Для тестов и storybook
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    // Для тестов и storybook
    asyncReducers={{
      ...defaultAsyncReducers,
      ...asyncReducers,
    }}
  >
    <StoryComponent />
  </StoreProvider>
);
