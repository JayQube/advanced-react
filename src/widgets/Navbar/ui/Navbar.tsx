import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// импортируем классы из файла со стилями
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
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
  // Пробуем получить данные пользователя
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  // Закрываем LoginModal
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  // Открываем LoginModal
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  // Logout
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  // Если есть данные в authData рендерим Navbar для авторизованного
  // пользователя и меняем функцию и текст кнопки на logout
  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={() => onLogout()}
        >
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    // С помощью хелпера classNames навешиваем стили.
    // Основной, из файла со стилями
    // Возможные, типа { hovered: true, disabled: false }
    // Те, что могут прийти из вне
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={() => onShowModal()}
      >
        {t('Enter')}
      </Button>

      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
