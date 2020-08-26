import React, {useState} from 'react';

import './App.css';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function AddModalColumn() {
   const [isModal, setIsModal] = useState(false)



    return (
        <div >
            <>
                <Button onClick={()=>{setIsModal(true)}} >ADD NEW Column</Button>
                <Modal isOpen={isModal} >
                    <ModalHeader>Add new column!!!</ModalHeader>
                    <ModalBody>
                        <Label>New title</Label>
                        <Input type='text'  ></Input>



                    </ModalBody>
                    <ModalFooter>
                        <Button >Add new Column</Button>
                        {' '}
                        <Button onClick={()=>{setIsModal(false)}} >Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>


        </div>
    );
}

export default AddModalColumn;
