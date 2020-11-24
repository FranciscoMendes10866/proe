import { combineReducers } from 'redux'

import authReducer from './authReducer'
import contactsReducer from './contactsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
})

export default rootReducer
