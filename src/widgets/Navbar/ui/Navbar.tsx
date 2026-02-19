import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// импортируем классы из файла со стилями
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

// Описание пропсов которые Navbar ожидает на вход.
// Может пригодиться, если нужно изменить стили компонента из вне.
interface NavbarProps {
  className?: string;
}

// Деструктуризируем пропсы и извлекаем className с типом NavbarProps
export const Navbar = memo(({ className }: NavbarProps) => {
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
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Ulbi TV')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Create article')}
        </AppLink>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={() => onLogout()}
        >
          {t('Logout')}
        </Button>
      </header>
    );
  }

  return (
    // С помощью хелпера classNames навешиваем стили.
    // Основной, из файла со стилями
    // Возможные, типа { hovered: true, disabled: false }
    // Те, что могут прийти из вне
    <header className={classNames(cls.navbar, {}, [className])}>
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
    </header>
  );
});
