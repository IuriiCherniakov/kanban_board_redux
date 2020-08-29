import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody, Input} from "reactstrap";


function Tasks(props) {
    const {tasks, changeTaskPriority, deleteTask, changeTaskPriorityDown, editTaskName, i} = props;

    const [editMode, setEditMode] = useState(false);
    const [editTask, setEditTask] = useState(tasks.name)

    const deleteButtonHandler = () => {
        deleteTask(tasks.id)
    }

    const saveButton = () => {
        //
        // editTaskName(tasks.id, editTask)
        setEditMode(false)
    }

    console.log('PROPS')
    console.log(props)


    return (
        <div>
            <Card>
                <CardBody>

                    {editMode ?
                        <div>
                            <Input value={editTask} onChange={(e) => setEditTask(e.target.value)}/>
                            <Button onClick={saveButton}>Save</Button>
                        </div>
                        :
                        <h3> {tasks.name} </h3>

                    }


                    <Button onClick={() => setEditMode(true)}>Edit</Button>
                    <Button onClick={deleteButtonHandler}> Del </Button>


                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button disabled={tasks.priority === 4}
                            onClick={() => changeTaskPriority(tasks.id, tasks.priority, tasks.i, tasks.i - 1)}>🠅</Button>
                    <Button disabled={tasks.priority === 1}
                            onClick={() => changeTaskPriorityDown(tasks.id, tasks.priority, tasks.i, tasks.i + 1)}
                    >🠇</Button>

                    <Button>←</Button>
                    <Button>→</Button>


                </CardBody>


            </Card>


        </div>
    );
}

export default Tasks;
