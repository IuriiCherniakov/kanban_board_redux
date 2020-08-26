import React, {useState} from 'react';

import './App.css';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function AddModalColumn(props) {
    const {addNewCol} = props;
    const [isModal, setIsModal] = useState(false)
    const [inputNewColumn, setInputNewColumn] = useState('')
    // ()=>addNewCol(inputNewColumn)

    const addNewColumnButton = () => {
        addNewCol(inputNewColumn);
        setInputNewColumn('')
    }

    console.log(inputNewColumn)
    return (
        <div>
            <>
                <Button onClick={() => {
                    setIsModal(true)
                }}>ADD NEW Column</Button>
                <Modal isOpen={isModal}>
                    <ModalHeader>Add new column!!!</ModalHeader>
                    <ModalBody>
                        <Label>New title</Label>
                        <Input type='text' onChange={(e) => {
                            setInputNewColumn(e.target.value)
                        }}/>


                    </ModalBody>
                    <ModalFooter>
                            <Button onClick={addNewColumnButton}>Add new Column</Button>
                        {' '}
                        <Button onClick={() => {
                            setIsModal(false)
                        }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>


        </div>
    );
}

export default AddModalColumn;
