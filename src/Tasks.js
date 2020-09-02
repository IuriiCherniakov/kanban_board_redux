import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody, Input} from "reactstrap";


function Tasks(props) {
    const {tasks, changeTaskPriority, deleteTask, changeTaskPriorityDown, editTaskName, i, changeTaskStatusPlus, changeTaskStatusMinus,listOfTasks} = props;

    const [editMode, setEditMode] = useState(false);
    const [editTask, setEditTask] = useState(tasks.name)
    const taskStatuses = ['todo', 'progress', 'review', 'done']
    // const taskStatuses1 = listOfTasks.map(el=> el.status) // WHY THIS SOLUTION DOESN`T WORK  ???
    console.log(taskStatuses)


    const deleteButtonHandler = () => {
        deleteTask(tasks.id)
    }

    const saveButton = () => {

        editTaskName(tasks.id, editTask)
        setEditMode(false)
    }

    const moveRightButton = () => {
        changeTaskStatusPlus(tasks.id, taskStatuses[taskStatuses.indexOf(tasks.status) + 1]) // IT NEEDS TO EXPLAIN

    }

    const moveLeftButton = () => {
        changeTaskStatusMinus(tasks.id, taskStatuses[taskStatuses.indexOf(tasks.status) - 1]) // IT NEEDS TO EXPLAIN

    }


    return (
        <div>
            <Card>
                <CardBody>

                    {editMode ?
                        <div>

                            <Input value={editTask} onChange={(e) => setEditTask(e.target.value)}/>
                            <Button onClick={saveButton}>Save</Button>
                            <Button onClick={() => {
                                setEditMode(false)
                            }}>Cancel</Button>
                        </div>
                        :
                        <h3> {tasks.name} </h3>

                    }


                    <Button onClick={deleteButtonHandler}> Del </Button>
                    <Button onClick={() => setEditMode(true)}>Edit</Button>


                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button disabled={tasks.priority === 4}
                            onClick={() => changeTaskPriority(tasks.id, tasks.priority, tasks.i, tasks.i - 1)}>🠅</Button>
                    <Button disabled={tasks.priority === 1}
                            onClick={() => changeTaskPriorityDown(tasks.id, tasks.priority, tasks.i, tasks.i + 1)}
                    >🠇</Button>

                    <Button disabled={tasks.status === 'todo'} onClick={moveLeftButton}>←</Button>
                    <Button  onClick={moveRightButton}>→</Button>


                </CardBody>


            </Card>


        </div>
    );
}

export default Tasks;
