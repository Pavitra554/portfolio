import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export interface toggleState {
  value: string
}

const initialState: toggleState = {
  value: "home",
}

export const navToggleSlice = createSlice({
  name: 'navToggle',
  initialState,
  reducers: {
    home:(state)=>{
        state.value = "home";
    },
    work:(state)=>{
        state.value = "work";
    },
    projects:(state)=>{
        state.value = "projects";
    },
  },
})

// Action creators are generated for each case reducer function
export const { home, work, projects } = navToggleSlice.actions
export const selectNav = (state: RootState) => state.navToggle.value
export default navToggleSlice.reducer;