import React from 'react';
import './App.css';
import {connect} from "react-redux";
import AddModalColumn from "./AddModalColumn";

function Board(props) {
    console.log(props)

    const listOfCards = props.tasks
    // const deleteTask = (taskId) => {
    //     props.deleteTask(taskId)
    // }

    return (
        <div>
            <AddModalColumn/>
            {listOfCards.map(el =>
                <li
                    key={el.id}>
                    {el.name}
                    <button onClick={()=>props.deleteTask(el.id)}>del</button>
                </li>)}
            Board
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list
});

const mapDispatchToProps = (dispatch) => ({
deleteTask: (taskId)=> dispatch({type:'TASK_DELETE', payload: taskId })
})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
