import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary', // eslint-disable-line no-unused-vars
  INVERTED = 'inverted', // eslint-disable-line no-unused-vars
  ERROR = 'error' // eslint-disable-line no-unused-vars
}

export enum TextAlign {
  RIGHT = 'right', // eslint-disable-line no-unused-vars
  LEFT = 'left', // eslint-disable-line no-unused-vars
  CENTER = 'center' // eslint-disable-line no-unused-vars
}

export enum TextSize {
  M = 'size_m', // eslint-disable-line no-unused-vars
  L = 'size_l', // eslint-disable-line no-unused-vars
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    // Присваиваем тему по умолчанию, если не отправили извне
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames('', mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
