import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

// Список тем для кнопки
export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

// Это означает, что ButtonProps включает все стандартные атрибуты HTML-кнопки (<button>) из React
// HTMLButtonElement указывает, что это атрибуты именно для элемента <button>, а не, например, <input type="button"> или <a>
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

// Тип FC для того чтобы можно было использовать пропс children
export const Button: FC<ButtonProps> = (props) => {
  // Вытаскиваем нужные нам пропсы
  const {
    // Классы, который мы можем передать в компонент из вне
    className,
    // То, что находится между <Button>...</Button>
    children,
    // Тема кнопки.  данном случае это 'clear'
    theme = ButtonTheme.BACKGROUND,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
