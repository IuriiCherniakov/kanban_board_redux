import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardBody} from "reactstrap";




function Column(props) {
    const {tasks} = props;
    console.log(tasks)


    return (
        <div>
            <Card>
                <CardBody>
                   <h3> {tasks.name}</h3>
                    <div>
                        priority: {tasks.priority}

                    </div>
                    <Button>🠅</Button>
                    <Button>🠇</Button>

                </CardBody>


            </Card>


        </div>
    );
}

export default Column;
