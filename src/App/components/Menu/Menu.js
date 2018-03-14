import React, {Component} from 'react';
import {Menu, Anchor} from 'grommet';
import {NavLink} from 'react-router-dom'
class SiteMenu extends Component {
    render() {
        return (
            <div className="SiteMenu">
                {this.props.inline === false
                    ? <Menu primary={true}>
                            <Anchor path="/dashboard">
                                Dashboard
                            </Anchor>
                            <Anchor path="/account">
                                Account
                            </Anchor>
                            <Anchor path="/groups">
                                Groups
                            </Anchor>
                            <Anchor path="/calender">
                                Calender
                            </Anchor>
                        </Menu>
                    : <Menu
                        responsive={true}
                        primary={true}
                        inline={false}
                        size='medium'
                        align='start'>
                        <Anchor path="/dashboard">
                            Dashboard
                        </Anchor>
                        <Anchor path="/account">
                            Account
                        </Anchor>
                        <Anchor path="/groups">
                            Groups
                        </Anchor>
                        <Anchor path="/calender">
                            Calender
                        </Anchor>
                    </Menu>}
            </div>
        );
    }
}

export default SiteMenu;
