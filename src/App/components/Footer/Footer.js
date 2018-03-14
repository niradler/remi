import React, {Component} from 'react';
import {
    Footer,
    Box,
    Paragraph
} from 'grommet';

class SiteFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <Footer justify='between'>
                    <Box
                        direction='row'
                        align='center'
                        pad={{
                        "between": "medium"
                    }}>
                        <Paragraph margin='none'>
                            © 2018 REMI by Nir Adler
                        </Paragraph>
                    </Box>
                </Footer>
            </div>
        );
    }
}

export default SiteFooter;