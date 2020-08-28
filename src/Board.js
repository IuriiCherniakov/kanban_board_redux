import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import AddModalColumn from "./AddModalColumn";
import Column from "./Column";
import {Row} from "reactstrap";
import AddModalTask from "./AddModalTask";

function Board(props) {


    const listOfColumns = props.columns
    const statuses = listOfColumns.map(el => el.status)
    console.log('statuses', statuses)
    const addNewTask = (newTaskName, newTaskPriority, newTaskStatus, taskIndex) => {
        const newTaskIndex = taskIndex + 1;
        const currentTaskIndex = taskIndex;
        console.log(newTaskIndex)

        props.addNewTask(newTaskName, newTaskPriority, newTaskStatus, taskIndex)

    }

    const addNewCol = (newTitleColumn, newColumnStatus) => {
        props.addNewColumn(newTitleColumn, newColumnStatus)
    }

    const deleteColumn = (columnId) => {
        props.deleteColumn(columnId)
    }

    const changeTaskPriority = (taskId,taskPriority,taskIndexCurrent,taskIndexPrevious) => {
        props.changeTaskPriority(taskId,taskPriority,taskIndexCurrent,taskIndexPrevious)
    }
    // const deleteTask = (taskId) => {
    //     props.deleteTask(taskId)
    // }

    return (
        <div>

            <AddModalColumn
                addNewCol={addNewCol}

            />

            <AddModalTask
                addNewTask={addNewTask}
                statuses={statuses}


            />


            <Row>
                {listOfColumns.map(
                    el =>
                        <Column
                            key={el.id}
                            column={el}
                            tasks={props.tasks}
                            deleteColumn={deleteColumn}
                            changeTaskPriority={changeTaskPriority}/>
                )
                }
            </Row>


        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list,
    columns: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (newTaskName, newTaskPriority, newTaskStatus) => dispatch({
        type: 'ADD_NEW_TASK',
        payload: {newTaskName, newTaskPriority, newTaskStatus}
    }),
    deleteTask: (taskId) => dispatch({type: 'TASK_DELETE', payload: taskId}),
    addNewColumn: (newTitleColumn, newColumnStatus) => dispatch({
        type: 'ADD_NEW_COLUMN',
        payload: {newTitleColumn, newColumnStatus}
    }),
    deleteColumn: (columnId) => dispatch({type: 'COLUMN_DELETE', payload: columnId}),
    changeTaskPriority: (taskId,taskPriority,taskIndexCurrent,taskIndexPrevious) => dispatch({
        type: 'CHANGE_TASK_PRIORITY',
        payload: {taskId,taskPriority,taskIndexCurrent,taskIndexPrevious }
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
