import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

// Перечисление дополнительных классов для стилей
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

// LinkProps это типы для встроеного компонента Link из react-router-dom
// В данном случае, мы расширяем интерфейс AppLinkProps типами из LinkProps
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
// Тип FC импортируется из react и как дженерик в него передается интерфейс
// Типировать можно как весь компонент, так и пропсы по отдельности
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    // По умолчанию theme будет значением из PRIMARY
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {/* В children попадают названия ссылок при вызове этого компонента.
        В данном случает 'Главная' и 'О сайте'
      */}
      {children}
    </Link>
  );
};
