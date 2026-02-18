import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  // replace это параметр, который позволяет заменить старый список
  // на новый, если он уже был загружен ранее
  // иначе будет загружаться новый список
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const page = getArticlesPageNum(getState());
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());
    console.log(type);

    try {
      // Добавляем query параметры в URL, чтобы при обновлении страницы сохранялись выбранные сортировка, порядок, поиск и тип
      // Если выбранный тип не ALL, то добавляем его в query параметры
      // if (props.replace) {
      addQueryParams({
        sort, order, search,
      });
      // }
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          // Передаем query параметры в запрос
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          // Если выбран ALL, то не передаем параметр type, чтобы не фильтровать по типу на сервере
          type_like: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
