import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  // DeepPartial - это условный тип, который делает все свойства объекта
  // опциональными, включая вложенные объекты.
  // Не все поля StateSchema обязательны
  initialState?: DeepPartial<StateSchema>;
  // Для тестов и storybook
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    // По умолчанию пуст. Позволяет передать начальное состояние при
    // создании store
    initialState,
    // Для тестов и storybook
    asyncReducers,
  } = props;

  // const navigate = useNavigate();

  // Создаем стор
  // В createReduxStore можно передать начальное состояние
  // Как пример передачи начального состояния, для редюсеров
  // const store = createReduxStore({ counter: { value: 10 } });
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    // navigate,
  );

  console.log('render');

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
