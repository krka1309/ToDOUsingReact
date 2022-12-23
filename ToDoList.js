import React, { useState } from "react";
import './App.css'
import { Component } from 'react';

const ToDoList = (props) => {
   
    

    return (
        
        <div>
            
            <li className="list">{props.text}
                <button className="check" onClick={() => {
                    props.onSelect(props.id)
                }}>Delete
                    <i id="edit" ></i>
                </button>
                <button className="check" onClick= {props.seteditTodo}>Edit
                
                </button>
            </li>
            
        </div>
    )
}
export default ToDoList;
















