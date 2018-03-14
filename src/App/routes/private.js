import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dash from '../screens/Dashboard'
import Groups from '../screens/Groups'
import Account from '../screens/Account'
import Calender from '../screens/Calender'

const private_routes = () => (
  <Switch>
    <Route exact path='/' component={Dash}/>
    <Route exact path='/dashboard' component={Dash}/>
    <Route exact path='/groups' component={Groups}/>
    <Route exact path='/account' component={Account}/>
    <Route exact path='/calender' component={Calender}/>
  </Switch>
)
export default private_routes