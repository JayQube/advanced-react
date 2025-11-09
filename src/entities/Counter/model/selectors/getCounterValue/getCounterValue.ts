import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// Reselect создает мемоизированные селекторы, которые пересчитываются
// только тогда, когда изменяются их входные параметры.
export const getCounterValue = createSelector(
  // Передаем уже существующий селектор getCounter
  getCounter,
  // counter это то что возвращает getCounter
  // Достаем из counter его значение - value
  (counter: CounterSchema) => counter.value,
);
