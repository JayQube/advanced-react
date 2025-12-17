import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  // Инициализируем хук useTranslation с именем файла, в котором хранится перевод.
  const { t, i18n } = useTranslation();

  // Функция переключения языка
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    // Используем наш компонент Button, а не встроеный
    <Button
      // className={classNames(cls.langswitcher, {}, [className])}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {/* Ключ по которому ищется перевод, в зависимости от того, на какой
      язык переключились в функции toggle(). В данном случае это текст кнопки. */}
      {t(short ? 'ShortLanguage' : 'Language')}
    </Button>
  );
});
