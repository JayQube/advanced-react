import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

// EntityState это тип из redux-toolkit
// Интерфейсом ArticleDetailsCommentsSchema мы расширяем EntityState
// Делаем так для commentsAdapter = createEntityAdapter
export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
