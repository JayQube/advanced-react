import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA', // eslint-disable-line no-unused-vars
  INCORRECT_AGE = 'INCORRECT_AGE', // eslint-disable-line no-unused-vars
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY', // eslint-disable-line no-unused-vars
  NO_DATA = 'NO_DATA', // eslint-disable-line no-unused-vars
  SERVER_ERROR = 'SERVER_ERROR' // eslint-disable-line no-unused-vars

}

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number,
  currency?: Currency,
  country?: Country;
  city?: string,
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  // В дата храним то, что получиил с сервера
  data?: Profile;
  // В форм то, что наизменял пользователь
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
