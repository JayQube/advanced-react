import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getUserStateInited } from 'entities/User/model/selectors/getUserStateInited/getUserStateInited';
// import { useNavigate } from 'react-router-dom';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserStateInited = useSelector(getUserStateInited);
  console.log(isUserStateInited);

  useEffect(() => {
    // Проверяем есть ли юзер в localstorage. Если есть, то добавляем данные в стейт
    // Так же подтверждаем, что стейт юзера инициализирован, не важно с каким результатом
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {/* Роуты не отрисуются пока не инициализируется стейт юзера в userSlice.ts* */}
          {isUserStateInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
