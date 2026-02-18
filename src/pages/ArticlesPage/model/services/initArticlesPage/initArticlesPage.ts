import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const {
      getState, dispatch,
    } = thunkApi;
    const inited = getArticlesPageInited(getState());
    if (!inited) {
      // Получаем параметры из URL, чтобы при обновлении страницы сохранялись выбранные сортировка, порядок, поиск и тип
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search') as string;
      const typeFormUrl = searchParams.get('type') as ArticleType;
      // const pageFromUrl = searchParams.get('page') as string;
      // const limitFromUrl = searchParams.get('limit') as string;

      // Если параметры есть в URL, то устанавливаем их в состояние
      // Если параметры нет в URL, то устанавливаем по умолчанию
      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }
      if (typeFormUrl) {
        dispatch(articlesPageActions.setType(typeFormUrl));
      }
      // if (pageFromUrl) {
      //   dispatch(articlesPageActions.setPage(Number(pageFromUrl)));
      // }
      // if (limitFromUrl) {
      //   dispatch(articlesPageActions.setLimit(Number(limitFromUrl)));
      // }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ }));
    }
  },
);
