import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

// Перечень всех схем для стора
export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
