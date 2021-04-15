import React, { useState } from 'react'
import { Alert, Button, Modal } from 'rsuite';
import AvatarEditor from 'react-avatar-editor'
import { useModalState } from '../../misc/custom.hooks';


const fileInpuTypes = ".png, .jpg, .jpeg";
const acceptedFileTypes = ['image/png','image/jpeg','image/pjpeg'];
const isValidFile=(file)=>acceptedFileTypes.includes(file.type);




const AvatarUploadBtn = () => {

  const{isOpen,open,close } = useModalState()
  const[img,setImg] =useState(null);

  const onFileinputChange=(ev)=>{
    const currFiles = ev.target.files;
  
    if(currFiles.length===1){
      const file = currFiles[0];
  
      if(isValidFile(file)){
  
        setImg(file);
  
        open();
  
      }else{
        Alert.warning(`Wrong file types ${file.type}`,4000);
      }
    }
  }

 

  return (
    <div className="mt-3 text-center">

      <div>
        <label htmlFor="avatar-upload" className="d-block cursor-pointer padded">
          Select New avater
          <input id="avatar-upload" type="file" className="d-none" accept={fileInpuTypes} onChange={onFileinputChange}/>
        </label>

        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            Adjust and upload new avatar
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center h-100">

           {img &&(
             <AvatarEditor
             image={img}
             width={200}
             height={200}
             border={100}
             borderRadius={100}// RGBA
             rotate={0}
             />
             )}
             </div>
          </Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload new avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    
    </div>
  )
}

export default AvatarUploadBtn