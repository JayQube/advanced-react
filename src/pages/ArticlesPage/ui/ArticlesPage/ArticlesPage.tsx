import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
  const { t } = useTranslation();

  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticlesPage, mods, [className])}>
      {t('Articles')}
    </div>
  );
};

export default memo(ArticlesPage);
