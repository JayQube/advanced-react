import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
  } = props;

  const mods: Mods = {};

  return (
    <Svg className={classNames(cls.Icon, mods, [className])} />
  );
});
