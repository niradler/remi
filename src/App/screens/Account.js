import React, {Component} from 'react';
import {
    App as AppContainer,
    Article,
    Section,
    Headline,
    Columns,
    Distribution,
    Box,
    Value,
    Heading,
    Header,
    Form,
    FormField,
    TextInput,
    List,
    ListItem,
    Button
} from 'grommet';
import GroupIcon from 'grommet/components/icons/base/Group';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
class Groups extends Component {
    render() {
        return (
            <div className="Groups">
                <Article >
                    <Box align='center' pad='medium' margin='large' colorIndex='light-2'>
                        <Form>
                            <Header>
                                <Heading>
                                    Account
                                </Heading>
                            </Header>
                            <Columns>
                                <FormField>
                                    <TextInput name='name' value='Name'/>
                                </FormField>
                                <FormField>
                                    <TextInput name='last' value='Last Name'/>
                                </FormField>
                                <FormField>
                                    <TextInput name='email' value='Email'/>
                                </FormField>
                                <FormField>
                                    <TextInput name='password' value='Password'/>
                                </FormField>
                                <Button label='Save' icon={< CheckmarkIcon />} onClick={() => {}}/>
                            </Columns>
                        </Form>
                    </Box>
                </Article>
            </div>
        );
    }
}

export default Groups;
