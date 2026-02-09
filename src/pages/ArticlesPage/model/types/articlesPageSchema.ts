import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // Отображение элементов. Список или плитка
  view: ArticleView;
  // Pagination
  page: number;
  hasMore: boolean;
  limit?: number;
}
