import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import Register from '../screens/Register'
import Login from '../screens/Login'

const public_routes = () => (
    <Switch>
        <Route exact path='/' component={Login}/> 
        {/* <Route exact path='/register' component={Register}/> */}
    </Switch>
)
export default public_routes