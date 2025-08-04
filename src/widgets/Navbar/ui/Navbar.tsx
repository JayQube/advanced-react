import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
// импортируем классы из файла со стилями
import cls from './Navbar.module.scss';

// Описание пропсов которые Navbar ожидает на вход. 
// Может пригодиться, если нужно изменить стили компонента из вне.
interface NavbarProps {
  className?: string;
}

// Деструктуризируем пропсы и извлекаем className с типом NavbarProps
export const Navbar = ({ className }: NavbarProps) => {
  return (
    // С помощью хелпера classNames навешиваем стили. 
    // Основной, из файла со стилями
    // Возможные, типа { hovered: true, disabled: false }
    // Те, что могут прийти из вне
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
