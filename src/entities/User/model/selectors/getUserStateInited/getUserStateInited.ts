import { StateSchema } from 'app/providers/StoreProvider';

export const getUserStateInited = (state: StateSchema) => state.user._isUserStateInited;
