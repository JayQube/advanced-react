import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  // combineReducers принимает объект, где ключи — это названия частей
  // состояния (слоев), а значения — редюсеры, которые управляют этими частями.
  let combinedReducer = combineReducers(reducers);

  // Массив с названиями редюсеров, которые мы хотим удалить
  let keysToRemove: StateSchemaKey[] = [];

  return {
    // Возвращает текущую карту всех активных редюсеров
    // Полезно для отладки или получения информации о текущей
    // конфигурации
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      // Проверяет, есть ли ключи для удаления
      if (keysToRemove.length > 0) {
        // Если есть - создает копию состояния (чтобы не мутировать исходное)
        state = { ...state };
        // Удаляет из состояния все части, соответствующие редюсерам, которые были удалены
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        // Очищает массив ключей для удаления после обработки
        keysToRemove = [];
      }
      // Вызывает корневой редюсер с обновленным состоянием и действием
      return combinedReducer(state, action);
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      // Проверяет валидность ключа и что редюсер с таким ключом еще не существует
      if (!key || reducers[key]) {
        return;
      }
      // Добавляет новый редюсер в карту редюсеров
      reducers[key] = reducer;
      // Пересоздает корневой редюсер с обновленной конфигурацией
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      // Проверяет валидность ключа и существование редюсера
      if (!key || !reducers[key]) {
        return;
      }
      // Удаляет редюсер из карты редюсеров
      delete reducers[key];
      // Добавляет ключ в массив для последующего удаления состояния
      keysToRemove.push(key);
      // Пересоздает корневой редюсер без удаленного редюсера
      combinedReducer = combineReducers(reducers);
    },
  };
}
