import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState } from './store'
// Define a type for the slice state
interface TickerState {
  close: number,
  prevClose: number,
  diff: number
}

// Define the initial state using that type
const initialState: TickerState = {
    close: 0,
    prevClose: 0,
    diff: 0
}

export const tickerSlice = createSlice({
  name: 'ticker',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTicker: (state, action: PayloadAction<TickerState>)  => {
      state.close = action.payload.close;
      state.prevClose = action.payload.prevClose
      state.diff = action.payload.close * 100 / action.payload.prevClose - 100;

    },
  
  }
})

export const { setTicker } = tickerSlice.actions
export const selectPrice = (state: RootState) => state.ticker.close;
export const selectDiff = (state: RootState) => state.ticker.diff;
export default tickerSlice.reducer;