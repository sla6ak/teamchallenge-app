import { createSlice } from '@reduxjs/toolkit'

const initialScrollView = { scrollTop: 0, scrollHeight: 100, clientHeight: 50 }

export const scrollView = createSlice({
  name: 'mobilMenu',
  initialState: initialScrollView,
  reducers: {
    scrollTopAction(state, action) {
      state.scrollTop = action.payload
    },
    scrollHeightAction(state, action) {
      state.scrollHeight = action.payload
    },
    clientHeightAction(state, action) {
      state.clientHeight = action.payload
    },
    scrollStateAction(_state, action) {
      return action.payload
    }
  }
})

export const {
  scrollTopAction,
  scrollHeightAction,
  clientHeightAction,
  scrollStateAction
} = scrollView.actions
