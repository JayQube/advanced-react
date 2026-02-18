import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

// EntityState это тип из redux-toolkit
// Интерфейсом ArticleDetailsCommentsSchema мы расширяем EntityState
// Делаем так для commentsAdapter = createEntityAdapter
export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
  isLoading?: boolean;
  error?: string;
}
