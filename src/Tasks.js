import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody} from "reactstrap";




function Column(props) {
    const {tasks,changeTaskPriority} = props;
    console.log(tasks)


    return (
        <div>
            <Card>
                <CardBody>
                   <h3> {tasks.name}</h3>


                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button disabled={tasks.priority===4} onClick={()=>changeTaskPriority(tasks.id, tasks.priority, tasks.i, tasks.i -1)}>🠅</Button>
                    <Button disabled={tasks.priority===1}>🠇</Button>

                </CardBody>


            </Card>


        </div>
    );
}

export default Column;
