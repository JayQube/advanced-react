import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Action
    increment: (state) => {
      state.value += 1;
    },
    // Action
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Экспортируем для использования и задаем названия counterActions
// counterReducer
export const {
  actions: counterActions,
  reducer: counterReducer,
} = counterSlice;
// export const { reducer: counterReducer } = counterSlice;
