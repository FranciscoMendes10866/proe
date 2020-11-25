import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { store, persistor } from './store'
import Navbar from './components/Navbar'
import router from './router'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Navbar />
        <Switch>
          {router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
