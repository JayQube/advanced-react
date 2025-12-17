import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  // Для тестов и storybook
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    // Для тестов и storybook
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  // Конфигурируем стор с типом StateSchema в котором список
  // всех схем для стора
  const store = configureStore<StateSchema>({
    // Список редюсеров, с начальными состояниями внутри них
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore временно!
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
