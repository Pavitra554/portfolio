import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface ThemeState {
  value: boolean
}

const initialState: ThemeState = {
  value: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle:(state)=>{
        state.value = !state.value;
    }
  },
})

export const { toggle,value }:any = themeSlice.actions
export const selectTheme = (state: RootState) => state.themetoggle.value
export default themeSlice.reducer