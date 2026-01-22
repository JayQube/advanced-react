import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = memo((props: [FTName]Props) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const mods: Mods = {};

  return (
    <div className={classNames(cls.[FTName], mods, [className])}>
      <div />
    </div>
  );
});
