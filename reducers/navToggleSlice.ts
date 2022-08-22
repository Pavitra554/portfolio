import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export interface toggleState {
  value: boolean
}

const initialState: toggleState = {
  value: false,
}

export const navToggleSlice = createSlice({
  name: 'navToggle',
  initialState,
  reducers: {
    togglenav:(state)=>{
        state.value = !state.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { togglenav } = navToggleSlice.actions
export const selectNavOpen = (state: RootState) => state.navToggle.value
export default navToggleSlice.reducer;