import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

// استخراج action creators
export const { increment, decrement } = counterSlice.actions;

// استخراج reducer برای قرار دادن در store
export default counterSlice.reducer;
