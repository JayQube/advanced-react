import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props;

  const mods: Mods = {};

  return (
    <div
      className={classNames(cls.Card, mods, [className])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </div>
  );
});
