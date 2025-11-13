import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

// Перечень всех схем для стора
export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema
}
