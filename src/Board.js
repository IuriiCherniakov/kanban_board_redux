import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import AddModalColumn from "./AddModalColumn";
import Column from "./Column";
import {Row} from "reactstrap";
import AddModalTask from "./AddModalTask";

function Board(props) {

    const listOfTasks = props.tasks
    const listOfColumns = props.columns
    const statuses = listOfColumns.map(el => el.status)
    const taskStatuses = props.tasks.map(el=> el.status)
    const taskId = props.tasks.map(el=> el.id)


    const addNewTask = (newTaskName, newTaskPriority, newTaskStatus, taskIndex) => {
        props.addNewTask(newTaskName, newTaskPriority, newTaskStatus, taskIndex)
    }

    const addNewCol = (newTitleColumn, newColumnStatus) => {
        props.addNewColumn(newTitleColumn, newColumnStatus)
    }

    const deleteColumn = (columnId) => {
        props.deleteColumn(columnId)
    }

    const deleteTask = (taskId) => {
        props.deleteTask(taskId)
    }

    const changeTaskPriority = (taskId, taskPriority, taskIndexCurrent, taskIndexPrevious) => {
        props.changeTaskPriority(taskId, taskPriority, taskIndexCurrent, taskIndexPrevious)
    }

    const changeTaskPriorityDown = (taskId, taskPriority, taskIndexCurrent, taskIndexPrevious) => {
        props.changeTaskPriorityDown(taskId, taskPriority, taskIndexCurrent, taskIndexPrevious);
    }

    const editTaskName = (taskId, newTaskName) => {
        props.editTask(taskId, newTaskName)
    }

    const changeTaskStatusPlus = (taskId, newTaskStatus) => {
        props.changeTaskStatusPlus(taskId, newTaskStatus)

    }

    const changeTaskStatusMinus = (taskId, newTaskStatus) => {
        props.changeTaskStatusMinus(taskId, newTaskStatus)

    }

    return (
        <div>

            <AddModalColumn
                addNewCol={addNewCol}
                // key={taskId.i} HOW TO TRANSFER THE KEY ???

            />

            <AddModalTask
                addNewTask={addNewTask}
                statuses={statuses}
                // key={taskId.id} HOW TO TRANSFER THE KEY ???


            />


            <Row>
                {listOfColumns.map(
                    el =>
                        <Column
                            key={el.id}
                            column={el}
                            tasks={props.tasks}
                            deleteColumn={deleteColumn}
                            changeTaskPriority={changeTaskPriority}
                            deleteTask={deleteTask}
                            changeTaskPriorityDown={changeTaskPriorityDown}
                            editTaskName={editTaskName}
                            changeTaskStatusPlus={changeTaskStatusPlus}
                            taskStatuses={taskStatuses}
                            changeTaskStatusMinus={changeTaskStatusMinus}
                            listOfTasks={listOfTasks}

                        />
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
    deleteTask: (taskId) => dispatch({type: 'DELETE_TASK', payload: taskId}),
    addNewColumn: (newTitleColumn, newColumnStatus) => dispatch({
        type: 'ADD_NEW_COLUMN',
        payload: {newTitleColumn, newColumnStatus}
    }),
    deleteColumn: (columnId) => dispatch({type: 'COLUMN_DELETE', payload: columnId}),
    changeTaskPriority: (taskId, taskPriority, taskIndexCurrent, taskIndexPrevious) => dispatch({
        type: 'CHANGE_TASK_PRIORITY_UP',
        payload: {taskId, taskPriority, taskIndexCurrent, taskIndexPrevious}
    }),

    changeTaskPriorityDown: (taskId, taskPriority, taskIndexCurrent, taskIndexPrevious) => dispatch({
        type: 'CHANGE_TASK_PRIORITY_DOWN',
        payload: {taskId, taskPriority, taskIndexCurrent, taskIndexPrevious}
    }),

    editTask: (taskId, newTaskName) => dispatch({
        type: 'EDIT_TASK',
        payload: {taskId, newTaskName}
    }),

    changeTaskStatusPlus: (taskId, newTaskStatus) => dispatch({
        type: 'CHANGE_TASK_STATUS_PLUS',
        payload: {taskId, newTaskStatus}
    }),

    changeTaskStatusMinus: (taskId, newTaskStatus) => dispatch({
        type: 'CHANGE_TASK_STATUS_MINUS',
        payload: {taskId, newTaskStatus}
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
