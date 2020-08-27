import React, {useState} from 'react';

import './App.css';
import {Col} from "reactstrap";

// import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function Column(props) {
    const {tasks, column, key, deleteColumn} = props;
    console.log(column.id)

    return (
        <Col>
            <h2>{column.title}</h2>


            <button onClick={()=>deleteColumn(column.id)}>Delete column</button>
            {tasks.filter(el=> column.status === el.status)
                .map(el=>{
                    return (
                        <Col>
                            {el.name}
                        </Col>
                    )
                })
            }
        </Col>
    );
}

export default Column;
