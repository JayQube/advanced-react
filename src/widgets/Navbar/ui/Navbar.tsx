import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// импортируем классы из файла со стилями
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

// Описание пропсов которые Navbar ожидает на вход.
// Может пригодиться, если нужно изменить стили компонента из вне.
interface NavbarProps {
  className?: string;
}

// Деструктуризируем пропсы и извлекаем className с типом NavbarProps
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    // С помощью хелпера classNames навешиваем стили.
    // Основной, из файла со стилями
    // Возможные, типа { hovered: true, disabled: false }
    // Те, что могут прийти из вне
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={() => onToggleModal()}
      >
        {t('Enter')}
      </Button>

      <Modal
        isOpen={isAuthModal}
        onClose={() => onToggleModal()}
      >
        {t('lorem')}
      </Modal>
    </div>
  );
};
