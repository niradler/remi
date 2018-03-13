import React, {Component} from 'react';
import {Menu, Anchor, Box, Heading,Columns} from 'grommet';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Box colorIndex='light-2'>
                    <Columns masonry={false} responsive={true}>
                    <Menu
                        responsive={true}
                        primary={true}
                        inline={false}
                        size='medium'
                        align='start'>
                        <Anchor href='#' className='active'>
                            First action
                        </Anchor>
                        <Anchor href='#'>
                            Second action
                        </Anchor>
                        <Anchor href='#'>
                            Third action
                        </Anchor>
                    </Menu>
                    </Columns>
                   
                </Box>
            </div>
        );
    }
}

export default Header;
