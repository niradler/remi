import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {
  App as AppContainer,
  Article,
  Section,
  Headline,
  Split
} from 'grommet';
import Globe from 'grommet/components/icons/base/Globe';
import LinkUp from 'grommet/components/icons/base/LinkUp';
import Login from './screens/Login'
import Routes from './routes'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Split separator={false} flex='right'>
          <Sidebar/>
          <AppContainer >
            <div style={{    marginTop: '2%'}}>
            <Route exact path='/' component={Login}/>
            {/* <Routes /> */}
            </div>
          </AppContainer>
        </Split>

      </div>
    );
  }
}

export default App;
