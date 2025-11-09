import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  // Конфигурируем стор с типом StateSchema в котором список
  // всех схем для стора
  return configureStore<StateSchema>({
    // Список редюсеров, с начальными состояниями внутри них
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
