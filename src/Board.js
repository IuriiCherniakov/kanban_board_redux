import React from 'react';
import './App.css';
import {connect} from "react-redux";
import AddModalColumn from "./AddModalColumn";

function Board(props) {
    console.log(props)

    const listOfCards = props.tasks
    const listOfColumns = props.columns
    console.log(listOfColumns)

    const addNewCol = (newTitleColumn) => {
        props.addNewColumn(newTitleColumn)
    }
    // const deleteTask = (taskId) => {
    //     props.deleteTask(taskId)
    // }

    return (
        <div>
            <AddModalColumn addNewCol={addNewCol}/>
            {listOfColumns.map(el =>
                <li
                    key={el.id}>
                    {el.status}
                    {/*<button onClick={()=>props.deleteTask(el.id)}>del</button>*/}
                </li>)}
            Board
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list,
    columns: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'TASK_DELETE', payload: taskId}),
    addNewColumn: (newTitleColumn) => dispatch({type: 'ADD_NEW_COLUMN', payload: newTitleColumn})

})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
