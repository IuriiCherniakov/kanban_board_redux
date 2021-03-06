import React, {useState} from 'react';


import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";


function AddModalTask(props) {
    const {addNewTask, statuses} = props;
    const [isModalTask, setIsModalTask] = useState(false);
    const [inputNewTitle, setInputNewTitle] = useState('')
    const [inputNewTaskPriority, setInputNewTaskPriority] = useState(1)
    const [inputNewTaskStatus, setInputNewTaskStatus] = useState('todo')
    const addNewTaskButton = () =>{
        addNewTask(inputNewTitle, inputNewTaskPriority, inputNewTaskStatus);
        setIsModalTask(false);
        setInputNewTitle('');

    }

    return (
        <div>

            <>
                <Button onClick={() => setIsModalTask(true)}>Add new task</Button>
                <Modal isOpen={isModalTask}>

                    <ModalHeader>Add new task</ModalHeader>
                    <ModalBody>
                        <Label>New title</Label>
                        <Input type='text' value={inputNewTitle} onChange={(e)=>{setInputNewTitle(e.target.value)}}/>

                        <Row>
                            <Col>
                                <Label> priority</Label>
                                <Input type='select' value={inputNewTaskPriority} onChange={(e)=> {setInputNewTaskPriority(e.target.value)}}>
                                    <option value={1}>low</option>
                                    <option value={2}>medium</option>
                                    <option value={3}>high</option>
                                    <option value={4}>super high</option>
                                </Input>
                            </Col>

                            <Col>

                                <Label>status</Label>

                                <Input type='select' value={inputNewTaskStatus} onChange={(e)=> {setInputNewTaskStatus(e.target.value)}}>
                                    {statuses.map(el=> <option value={el}>{el}</option> )}
                                </Input>

                            </Col>

                        </Row>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={addNewTaskButton} >Add new task!!</Button>
                        {' '}
                        <Button onClick={()=>{setIsModalTask(false)}} >Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>

        </div>
    );
}

export default AddModalTask;
