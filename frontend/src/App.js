import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <ProtectedRoute path='/'>
                  <Home/>
              </ProtectedRoute>
          </Switch>
      </Router>
  )
}

export default App;
