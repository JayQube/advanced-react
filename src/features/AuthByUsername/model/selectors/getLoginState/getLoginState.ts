import { StateSchema } from 'app/providers/StoreProvider';

// Достаем из стора все что связано с loginForm
export const getLoginState = (
  state: StateSchema,
) => state?.loginForm;
