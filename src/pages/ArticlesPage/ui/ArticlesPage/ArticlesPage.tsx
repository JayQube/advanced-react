/* eslint-disable max-len */
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;

  // const dispatch = useAppDispatch();
  // const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        isLoading
        view={ArticleView.BIG}
        articles={[]}
      />
    </div>
  );
};

export default memo(ArticlesPage);
