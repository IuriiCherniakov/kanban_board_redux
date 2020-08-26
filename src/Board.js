import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import AddModalColumn from "./AddModalColumn";

function Board(props) {
    const [isEditStatusColumn, setIsEditStatusColumn] = useState(false)
    console.log(props)

    const listOfCards = props.tasks
    const listOfColumns = props.columns
    console.log(listOfColumns)

    const addNewCol = (newTitleColumn, newColumnStatus ) => {
        props.addNewColumn(newTitleColumn, newColumnStatus )
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
                    <button  onClick={()=>{
                        setIsEditStatusColumn(true)
                        console.log(isEditStatusColumn)
                    }}>Edit status</button>
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
    addNewColumn: (newTitleColumn, newColumnStatus ) => dispatch({type: 'ADD_NEW_COLUMN', payload: {newTitleColumn, newColumnStatus}})

})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
