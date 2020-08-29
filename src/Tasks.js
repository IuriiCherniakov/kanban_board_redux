import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody} from "reactstrap";




function Tasks(props) {
    const {tasks,changeTaskPriority, deleteTask, i} = props;

    const deleteButtonHandler = ()=>{
        deleteTask(tasks.id)
    }

    console.log('TASKS')
    console.log(tasks)


    return (
        <div>
            <Card>
                <CardBody>
                   <h3> {tasks.name}</h3>
                    <Button onClick={deleteButtonHandler} > Del </Button>

                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button disabled={tasks.i ===0} onClick={()=>changeTaskPriority(tasks.id, tasks.priority, tasks.i, tasks.i -1)}>🠅</Button>
                    <Button disabled={tasks.i === (tasks.length-1)}>🠇</Button>

                    <Button></Button>
                </CardBody>


            </Card>


        </div>
    );
}

export default Tasks;
