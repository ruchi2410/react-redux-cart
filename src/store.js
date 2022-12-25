import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './redux/reducers/main'

const store = configureStore({
     reducer: rootReducer
})  // The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;