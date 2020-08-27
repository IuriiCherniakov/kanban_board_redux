import React, {useState} from 'react';

import './App.css';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import AddModalTask from "./AddModalTask";


function AddModalColumn(props) {
   const columnStatuses = [
       'todo', 'progress', 'review', 'done'
   ]
    const [inputNewColumnStatus, setInputNewColumnStatus] = useState('todo');
    console.log(columnStatuses)
    const {addNewCol} = props;
    const [isModal, setIsModal] = useState(false)
    const [inputNewColumn, setInputNewColumn] = useState('')
    // ()=>addNewCol(inputNewColumn)

    const addNewColumnButton = () => {
        addNewCol(inputNewColumn,inputNewColumnStatus);
        setInputNewColumn('')
        setIsModal(false)

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

                        <Label>Status</Label>
                    {/*    <Input type='select' value={inputNewColumnStatus}  onChange={(e) => {*/}
                    {/*        setInputNewColumnStatus(e.target.value)}}>*/}
                    {/*        <option value={'todo'}>Todo</option>*/}
                    {/*        <option value={'progress'}>progress</option>*/}
                    {/*        <option value={'review'}>review</option>*/}
                    {/*        <option value={'done'}>done</option>*/}
                    {/*</Input>*/}
                    <Input  value={inputNewColumnStatus}  onChange={(e)=> {setInputNewColumnStatus(e.target.value)}}  />







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
