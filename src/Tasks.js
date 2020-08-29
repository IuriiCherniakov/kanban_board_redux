import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody} from "reactstrap";


function Tasks(props) {
    const {tasks, changeTaskPriority, deleteTask, i, changeTaskPriorityDown} = props;

    const [editMode, setEditMode] = useState(false);

    const deleteButtonHandler = () => {
        deleteTask(tasks.id)

    }

    console.log('PROPS')
    console.log(props)


    return (
        <div>
            <Card>
                <CardBody>
                    <div>
                        (editMode ?)





                        <h3> {tasks.name}</h3>


                        <Button onClick={deleteButtonHandler}> Del </Button>
                    </div>

                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button disabled={tasks.priority === 4}
                            onClick={() => changeTaskPriority(tasks.id, tasks.priority, tasks.i, tasks.i - 1)}>🠅</Button>
                    <Button disabled={i === (tasks.length - 1)}
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
