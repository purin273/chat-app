import React from 'react';
import { Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context'
import Editableinput from '../Editableinput';

const Dashboard = ({onSignOut}) => {

  const {profile} = useProfile();

  const onSave = async (newData) => {
    console.log(newData);
  }

  return (
  <>
  <Drawer.Header>
    <Drawer.Title>
      Dashboard
    </Drawer.Title>
  </Drawer.Header>
  <Drawer.Body>
    <h3>Hey, {profile.name}</h3>
    <Divider>
      <Editableinput
      name = "nickname"
      initialValue={profile.name}
      onSave={onSave}
      label={<hd className="mb-2">Nickname</hd>}
      />
    </Divider>

  </Drawer.Body>
  <Drawer.Footer>
  <Button block color="red" onClick={onSignOut}>
    Sign out
  </Button>
  </Drawer.Footer>
  </>
  );
}

export default Dashboard
