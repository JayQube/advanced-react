import {
  ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

// Список тем для кнопки
export enum ButtonTheme {
  CLEAR = 'clear', // eslint-disable-line no-unused-vars
  CLEAR_INVERTED = 'clearInverted', // eslint-disable-line no-unused-vars
  OUTLINE = 'outline', // eslint-disable-line no-unused-vars
  BACKGROUND = 'background', // eslint-disable-line no-unused-vars
  BACKGROUND_INVERTED = 'backgroundInverted' // eslint-disable-line no-unused-vars
}

// Enum с классами для размеров
export enum ButtonSize {
  M = 'size_m', // eslint-disable-line no-unused-vars
  L = 'size_l', // eslint-disable-line no-unused-vars
  XL = 'size_xl', // eslint-disable-line no-unused-vars
}

// Это означает, что ButtonProps включает все стандартные атрибуты HTML-кнопки (<button>) из React
// HTMLButtonElement указывает, что это атрибуты именно для элемента <button>, а не, например, <input type="button"> или <a>
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

// Тип FC для того чтобы можно было использовать пропс children
export const Button = memo((props: ButtonProps) => {
  // Вытаскиваем нужные нам пропсы
  const {
    // Классы, который мы можем передать в компонент из вне
    className,
    // То, что находится между <Button>...</Button>
    children,
    // Тема кнопки.  данном случае это 'clear'
    theme = ButtonTheme.OUTLINE,
    square,
    // Значение кнопки по умолчанию
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    // Кнопка будет квадратной, если в компонент передан пропс square
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className])}
      disabled={disabled}
      {...otherProps} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </button>
  );
});
