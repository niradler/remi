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
import FormAddIcon from 'grommet/components/icons/base/FormAdd';
class Groups extends Component {
  render() {
    return (
      <div className="Groups">
            <Article >
            <Box align='center' pad='medium' margin='large' colorIndex='light-2'>
            <Form>
  <Header>
    <Heading>
      Create new group
    </Heading>
  </Header>
  <Columns>
  <FormField>
  <TextInput id='item1'
    name='create-group'
    value='name for the new group'
 />
</FormField>

<Button icon={<FormAddIcon  />}
  label='Add'
  onClick={()=>{}} />
  </Columns>



</Form>
                </Box>
   <Section>
   <List selectable={true}>
  <ListItem justify='between'
    separator='horizontal'>
    <span>
      Alan
    </span>
    <span className='secondary'>
      <Value value={75} />
      <GroupIcon />
    </span>
  </ListItem>
  <ListItem justify='between'>
    <span>
      Chris
    </span>
    <span className='secondary'>
    <Value value={2} />
      <GroupIcon />
    </span>
  </ListItem>
  <ListItem justify='between'>
    <span>
      Eric
    </span>
    <span className='secondary'>
    <Value value={5} />
      <GroupIcon />
    </span>
  </ListItem>
</List>

       </Section>           

 </Article>
           
         
      </div>
    );
  }
}

export default Groups;
