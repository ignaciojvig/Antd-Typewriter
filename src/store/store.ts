import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({})

export const store = configureStore({ reducer: rootReducer })
export type RootState = ReturnType<typeof rootReducer>
