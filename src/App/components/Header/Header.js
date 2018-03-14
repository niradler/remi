import React, {Component} from 'react';
import { Anchor, Box, Heading,Columns} from 'grommet';
import Menu from "../Menu/Menu";
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Box colorIndex='light-2'>
                    <Columns masonry={false} responsive={true}>
                    
                    <Menu />
                    </Columns>
                   
                </Box>
            </div>
        );
    }
}

export default Header;
