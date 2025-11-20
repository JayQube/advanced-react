import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import {
  FC, ReactElement, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';

// Массив, где ключ это название редюсера, а значение сам редюсер
export type ReducersList = {
  // eslint-disable-next-line no-unused-vars
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactElement;
  reducers: ReducersList;
  // Если не нужно удалять редюсер при демонтировании компонента
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    // Получает кортеж (массив фиксированной длинны), где первый элемент это
    // ключ, а второй значение [loginForm, loginReducer]
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} Reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} Reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    children
  );
};
