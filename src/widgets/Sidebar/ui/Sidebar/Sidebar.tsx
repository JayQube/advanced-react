import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  // Состояние сайдбара. false - развернут / true - свернут
  const [collapsed, setCollapsed] = useState(false);

  // Функция-переключатель. setCollapsed принимает колбек в виде нынешнего состояиня
  // и меняет его на противоположное
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      // Класс cls.collapsed будет активен если в состоянии collapsed значение true
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
