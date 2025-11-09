import { StateSchema } from 'app/providers/StoreProvider';

// Возвращает весь стейт счетчика
export const getCounter = (state: StateSchema) => state.counter;
