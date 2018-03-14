import React, {Component} from 'react';
import {
  App as AppContainer,
  Article,
  Section,
  Headline,
  Split,
  Columns,
  Distribution,
  Box,
  Value
} from 'grommet';
import Globe from 'grommet/components/icons/base/Globe';
import LinkUp from 'grommet/components/icons/base/LinkUp';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard" style={{    'marginTop': '2%'}}>

  
            <Distribution
              series={[
              {
                "label": "First",
                "value": 40,
                "colorIndex": "graph-1"
              }, {
                "label": "Fourth",
                "value": 10,
                "colorIndex": "graph-2"
              }
            ]}/>
            <Article >

              <Columns>

                <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
                  <Value
                    value={75}
                    icon={< Globe />}
                    label='Sample label'
                    trendIcon={< LinkUp />}
                    units='%'/>
                </Box>
                <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
                  <Value
                    value={75}
                    icon={< Globe />}
                    label='Sample label'
                    trendIcon={< LinkUp />}
                    units='%'/>
                </Box>
                <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
                  <Value
                    value={75}
                    icon={< Globe />}
                    label='Sample label'
                    trendIcon={< LinkUp />}
                    units='%'/>
                </Box>
              </Columns>

            </Article>
         
      </div>
    );
  }
}

export default Dashboard;
