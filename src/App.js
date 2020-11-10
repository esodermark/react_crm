import './App.css'
import { Switch, Route } from 'react-router-dom'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import CustomerContextProvider from './contexts/CustomerContext'
import Home from './pages/Home'
import CustomerDetailsPage from './pages/CustomerDetailsPage'
import UserContextProvider from './contexts/UserContext'
import Logout from './components/Login/Logout'
import RegisteredSuccess from './pages/RegisteredSuccess'

function App() {
  return (
    <>
      <UserContextProvider>
      <CustomerContextProvider>
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/registered-success' component={RegisteredSuccess} />
          <Route exact path="/customer/:id" component={CustomerDetailsPage} />
          <Route path='/' component={Home} />
        </Switch>
      </CustomerContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App;
