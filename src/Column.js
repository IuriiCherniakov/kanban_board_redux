import React, {useState} from 'react';

import './App.css';
import {Button, Col} from "reactstrap";
import Tasks from "./Tasks";


function Column(props) {
    const {
        tasks,
        column,
        deleteColumn,
        changeTaskPriority,
        deleteTask,
        changeTaskPriorityDown,
        editTaskName,
        changeTaskStatusPlus,
        taskStatuses,
        changeTaskStatusMinus,
        listOfTasks
    } = props;


    return (
        <Col>
            <h2>{column.title}</h2>


            <Button onClick={() => deleteColumn(column.id)}>Delete column</Button>

            {tasks.filter(el => column.status === el.status)
                .sort((a,b)=>b.priority - a.priority).map((el, i) =>
                    <Tasks

                        tasks={el}
                        key={el.id}
                        changeTaskPriority={changeTaskPriority}
                        deleteTask={deleteTask}
                        i={i}
                        changeTaskPriorityDown={changeTaskPriorityDown}
                        editTaskName={editTaskName}
                        changeTaskStatusPlus={changeTaskStatusPlus}
                        taskStatuses={taskStatuses}
                        changeTaskStatusMinus={changeTaskStatusMinus}
                        listOfTasks={listOfTasks}
                    />
                )

            }
        </Col>
    );
}

export default Column;
