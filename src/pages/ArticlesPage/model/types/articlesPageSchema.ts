import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // Pagination
  page: number;
  hasMore: boolean;
  limit: number;

  // filters
  // Отображение элементов. Список или плитка
  view: ArticleView;
  // Порядок сортировки. От большего / от меньшего
  order: SortOrder;
  // Поле по которому будет сортироваться
  sort: ArticleSortField;
  // Поиск
  search: string;
  // Тип статьи
  type: ArticleType;

  _inited: boolean;
}
