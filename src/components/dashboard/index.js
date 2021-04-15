import React from 'react';
import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context'
import { database } from '../../misc/firebase';
import Editableinput from '../Editableinput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';

const Dashboard = ({onSignOut}) => {

  const {profile} = useProfile();

  const onSave = async (newData) => {
   const userNicknameRef = database.ref(`/profile/${profile.uid}`).child('name')
  
   try{
     await userNicknameRef.set(newData);
     Alert.success('Nickname has Been Updateed',4000);

   }catch(err){
     Alert.error(err.message,4000);
   }
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
    <ProviderBlock/>

    <Divider>
      <Editableinput
      name = "nickname"
      initialValue={profile.name}
      onSave={onSave}
      label={<hd className="mb-2">Nickname</hd>}
      />
      <AvatarUploadBtn/>
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
