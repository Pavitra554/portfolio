import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export interface themeState {
  value: boolean
}

const initialState: themeState = {
  value: true,
}

export const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggle:(state)=>{
        state.value = !state.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions
export const selectTheme = (state: RootState) => state.themeMode.value
export default themeSlice.reducer;