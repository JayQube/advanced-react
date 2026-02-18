import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal', // eslint-disable-line no-unused-vars
  OUTLINED = 'outlined', // eslint-disable-line no-unused-vars
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </div>
  );
});
