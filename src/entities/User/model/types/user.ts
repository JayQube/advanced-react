export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;

  // Флаг для проверки того, что стейт юзера инициализировался
  _isUserStateInited: boolean;
}
