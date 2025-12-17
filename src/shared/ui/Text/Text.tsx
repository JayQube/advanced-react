import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary', // eslint-disable-line no-unused-vars
  ERROR = 'error' // eslint-disable-line no-unused-vars
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    // Присваиваем тему по умолчанию, если не отправили извне
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames('', { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
