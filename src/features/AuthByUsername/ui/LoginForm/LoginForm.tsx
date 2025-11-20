import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReudcers:ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    // Передаем в стейт то, что пользователь ввел в инпут
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReudcers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Autorization Form')} />
        {/* Если сервер вернул ошибку, то в переменную error
      запишется ошибка и она будет true. Тогда рендерим текст ошибки */}
        {error && (
          <Text
            text={t('Uncorrect username or password')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autoFocus
          type="text"
          className={cls.input}
          placeholder={t('Enter Username')}
          onChange={onChangeUsername}
          // Передаем в инпут значение, которое достали из стейта
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Enter password')}
          onChange={onChangePassword}
          // Передаем в инпут значение, которое достали из стейта
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          // Передаем в кнопку состояние. Должна быть не активна
          // если isLoading = true
          disabled={isLoading}
        >
          {t('Enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
