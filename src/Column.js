import React, {useState} from 'react';

import './App.css';
import {Button, Col} from "reactstrap";
import Tasks from "./Tasks";


function Column(props) {
    const {tasks, column, deleteColumn, changeTaskPriority, deleteTask} = props;
    console.log("status column", column.status)

    return (
        <Col>
            <h2>{column.title}</h2>


            <Button onClick={() => deleteColumn(column.id)}>Delete column</Button>

            {tasks.filter(el => column.status === el.status)
                .map((el, i) =>
                    <Tasks

                        tasks={el}
                        key={el.id}
                        changeTaskPriority={changeTaskPriority}
                        deleteTask={deleteTask}
                        i={i}
                    />
                )

            }
        </Col>
    );
}

export default Column;
