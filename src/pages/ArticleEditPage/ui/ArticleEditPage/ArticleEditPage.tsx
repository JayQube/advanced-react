import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  // Вызываем хук useParams для получения параметров из URL.
  // В данном случае мы ожидаем, что URL может содержать параметр id,
  // который будет использоваться для определения, редактируем ли мы
  // существующую статью (если id присутствует) или создаем новую
  // (если id отсутствует).
  const { id } = useParams<{id: string}>();
  // Логическая переменная isEdit будет истинной, если id присутствует,
  // что означает, что мы редактируем существующую статью. Если id
  // отсутствует, isEdit будет ложной, и мы будем создавать новую статью.
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? t('Редактирование статьи с ID = ') + id
        : t('Создание новой статьи')}
    </Page>
  );
});

export default ArticleEditPage;
