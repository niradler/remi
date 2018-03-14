import React, {Component} from 'react';
import {
    Sidebar,
    Header,
    Title,
    Anchor,
    Box,
    Footer,
    Paragraph,
    Button
} from 'grommet';
import UserIcon from 'grommet/components/icons/base/User';
import Menu from "../Menu/Menu";
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
                        <Menu inline={false} />
                    </Box>
                    <Footer pad='medium'>
                        <Paragraph margin='none'>
                            © 2018 REMI by Nir Adler
                        </Paragraph>                 
                    </Footer>
                </Sidebar>
            </div>
        );
    }
}

export default SideBar;
