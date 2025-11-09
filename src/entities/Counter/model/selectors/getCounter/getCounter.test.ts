import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    // Объявляем не весь стейт приложения, а только ту часть, которая относится к counter
    const state: DeepPartial<StateSchema> = {
      // Задаем значение
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
