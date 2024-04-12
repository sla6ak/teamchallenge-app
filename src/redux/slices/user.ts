import { createSlice } from '@reduxjs/toolkit'

const initialUser = { login: '', token: '' }

export const user = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    //переделать
    tokenAction(_state, action) {
      return action.payload
    }
  }
})

export const { tokenAction } = user.actions
