import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (_newOrder: SortOrder) => void;
  onChangeSort: (_newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;

  // const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // Массив опций для выбора направления сортировки
  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  // Массив опций для выбора поля сортировки
  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleSortSelector, mods, [className])}>
      <Select
        label={t('Sort By')}
        options={sortFieldOptions}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        label={t('By')}
        options={orderOptions}
        value={order}
        onChange={changeOrderHandler}
        className={cls.order}
      />
    </div>
  );
});
