import { ArticleType } from 'entities/Article/model/types/article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (_type: ArticleType) => void;
}

// Компонент для отображения табов с типами статей
export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType,
  } = props;

  const { t } = useTranslation();

  // Массив табов с типами статей, который будет отображаться в компоненте Tabs
  // Так же используется в компоненте Tabs для отображения табов
  // Так же используется в компоненте ArticleTypeTabs для отображения табов
  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('all articles'),
    },
    {
      value: ArticleType.IT,
      content: t('it'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
