import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  const mods: Mods = {};

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
      <ArticleDetails
        id={id || '1'}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
