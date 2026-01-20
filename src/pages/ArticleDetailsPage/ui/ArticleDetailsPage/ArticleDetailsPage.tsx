import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;

  // const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
      {t('Article')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
