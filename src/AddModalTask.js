import React, {useState} from 'react';


import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";


function AddModalTask(props) {
    const {addNewTask} = props;
    const [isModalTask, setIsModalTask] = useState(false);
    const [inputNewTitle, setInputNewTitle] = useState('')
    const [inputNewTaskPriority, setInputNewTaskPriority] = useState(1)
    const [inputNewTaskStatus, setInputNewTaskStatus] = useState('todo')
    const addNewTaskButton = () =>{
        addNewTask(inputNewTitle, inputNewTaskPriority, inputNewTaskStatus);
        setIsModalTask(false);
        console.log(inputNewTitle);
        console.log(inputNewTaskPriority);
        console.log(inputNewTaskStatus);
    }

    return (
        <div>

            <>
                <Button onClick={() => setIsModalTask(true)}>Add new task</Button>
                <Modal isOpen={isModalTask}>

                    <ModalHeader>Add new task</ModalHeader>
                    <ModalBody>
                        <Label>New title</Label>
                        <Input type='text' value={inputNewTitle} onChange={(e)=>{setInputNewTitle(e.target.value)}}></Input>

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
                                    <option value="todo">todo</option>
                                    <option value="progress">progress</option>
                                    <option value="review">review</option>
                                    <option value="done">done</option>

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
