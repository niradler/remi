import React, {Component} from 'react';
import {Sidebar,Header,Title,Anchor,Box,Menu,Footer} from 'grommet';

class SideBar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <Sidebar colorIndex='neutral-3-a' fixed={false}>
                    <Header pad='medium' justify='between'>
                        <Title>
                            Menu
                        </Title>
                    </Header>
                    <Box flex='grow' justify='start'>
                        <Menu primary={true}>
                            <Anchor href='#' className='active'>
                                First
                            </Anchor>
                            <Anchor href='#'>
                                Second
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                        </Menu>
                    </Box>
                    <Footer pad='medium'>
                        {/* <Button icon={< User />}/> */}
                    </Footer>
                </Sidebar>
            </div>
        );
    }
}

export default SideBar;
