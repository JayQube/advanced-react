import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { CombinedState } from 'redux';
import { To, NavigateOptions } from 'react-router-dom';

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

// Типы для экстра аргуметов (для axios)
export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (_to: To, _options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
