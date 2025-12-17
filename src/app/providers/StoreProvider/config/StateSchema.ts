import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { CombinedState } from 'redux';

// Перечень всех схем для стора
export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

// Достаем названия ключей из StateSchema
export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (_state: StateSchema, _action: AnyAction) => CombinedState<StateSchema>;
  add: (_key: StateSchemaKey, _reducer: Reducer) => void;
  remove: (_key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
