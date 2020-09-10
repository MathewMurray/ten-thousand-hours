import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicRoute from '../Utils/PublicRoute'
import LoginPage from '../../routes/loginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import GoalsPage from '../../routes/GoalsPage/GoalsPage'
import HomePage from '../../routes/HomePage/HomePage'
import UserPage from '../../routes/UserPage/UserPage'
import NewGoalForm from '../../components/NewGoalForm/NewGoalForm'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error){
    console.error(error)
    return {hasError: true}
  }

  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Route component={Header} />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error! oh no!</p>}
          <Switch>
            <PrivateRoute
              path={'/userPage'}
              component={UserPage}
            />
            <PrivateRoute
              path={'/goals/:goal_id/logs'}
              component={GoalsPage}
            />
            <PrivateRoute
              path={'/newGoal'}
              component={NewGoalForm}
            />
            <PublicRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact
              path={'/'}
              component={HomePage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App