import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import router from './router/index'

const App = () => {
  return (
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
  )
}

export default App
