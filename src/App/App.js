import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {App as AppContainer, Article, Section, Headline, Split} from 'grommet';
import Login from './screens/Login'
import PrivateRoutes from './routes/private'
import PublicRoutes from './routes/public'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Split separator={false} flex='right' >
          <Sidebar/>
          <div>
          <Header/>
          <AppContainer >
            <div>
              {/*
                <PublicRoutes/>
             */}
              <PrivateRoutes/>
            </div>
          </AppContainer>
          </div>

        </Split>
      </div>
    );
  }
}

export default App;
