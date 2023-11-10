/* eslint-disable prettier/prettier */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = initialState.value; // Se puede cambiar el initialState.value por 0 y listo tambien
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
