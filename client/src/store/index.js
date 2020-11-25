import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persisterdReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const store = createStore(
  persisterdReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const persistor = persistStore(store)

export { store, persistor }
