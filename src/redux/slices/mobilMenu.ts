import { createSlice } from '@reduxjs/toolkit'

const initialMobilMenu = false

export const mobilMenu = createSlice({
  name: 'mobilMenu',
  initialState: initialMobilMenu,
  reducers: {
    openMobilMenuAction(state, _action) {
      return !state
    },
    closeMobilMenuAction(_state, action) {
      return action.payload
    }
  }
})

export const { openMobilMenuAction, closeMobilMenuAction } = mobilMenu.actions
