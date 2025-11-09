import { CounterSchema } from 'entities/Counter';

// Перечень всех схем для стора
export interface StateSchema {
  counter: CounterSchema;
}
