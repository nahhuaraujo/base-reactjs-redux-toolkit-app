import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    reset: state => {
      state.counter = 0;
    },
    toggle: state => {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counter = counterSlice.reducer;
