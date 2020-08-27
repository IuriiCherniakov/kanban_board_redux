import React, {useState} from 'react';

import './App.css';
import {Button, Col} from "reactstrap";
import Tasks from "./Tasks";



function Column(props) {
    const {tasks, column, key, deleteColumn} = props;
    console.log("props", props)

    return (
        <Col>
            <h2>{column.title}</h2>


            <Button onClick={() => deleteColumn(column.id)}>Delete column</Button>
            {tasks.filter(el => column.status === el.status)
                .map(el =>
                    <Tasks
                        tasks={el}


                    />
                )

            }
        </Col>
    );
}

export default Column;
