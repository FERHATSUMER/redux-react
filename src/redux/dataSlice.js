import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer