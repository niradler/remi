import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dash from '../screens/Dashboard'
import Groups from '../screens/Groups'
import Account from '../screens/Account'

const routes = () => (
  <Switch>
    <Route exact path='/' component={Dash}/>
    <Route exact path='/groups' component={Groups}/>
    <Route exact path='/account' component={Account}/>
  </Switch>
)
export default routes