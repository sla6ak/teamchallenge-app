import { createSlice } from '@reduxjs/toolkit'

const initialToken = ''

export const token = createSlice({
  name: 'token',
  initialState: initialToken,
  reducers: {
    tokenAction(_state, action) {
      return action.payload
    }
  }
})

export const { tokenAction } = token.actions
