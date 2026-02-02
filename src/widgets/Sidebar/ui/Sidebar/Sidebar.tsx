import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  // Состояние сайдбара. false - развернут / true - свернут
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  // Функция-переключатель. setCollapsed принимает колбек в виде нынешнего состояиня
  // и меняет его на противоположное
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // Проходимся по массиву данных из model\items.ts и рендерим каждый объект
  // в компонент SidebarItem
  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <div
      // data-testid: это метка для тестов
      data-testid="sidebar"
      // Класс cls.collapsed будет активен если в состоянии collapsed значение true
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        // Метка для тестов
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        // Говорим кнопке какого размера быть
        size={ButtonSize.L}
        // Говорим кнопке, что она квадратная
        square
      >
        {/* Вид кнопки в зависимости от состояния сайдбара */}
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
        // Говорим компоненту, какой длинны будет текст
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </div>
  );
});
