import React from "react";
import tick  from '../icons/check.png'
import not_tick  from '../icons/not_tick.png'
import deletebutton  from '../icons/icons8-delete-30.png'
 const Todolist = ({text ,id, isComplete, deleteTodo ,toggle})=>{
    return(
        <div className=" flex items-center my-6 gap-4">
            <div onClick={()=> {toggle(id)}} className=" flex flex-1 items-center cursor-pointer">
                <img className=" max-h-7 w-7 mr-2" src={ isComplete ?tick : not_tick} alt="" />
                <p className= {`${isComplete ? 'line-through' : ''}`}> {text}</p> 
            </div>
            <div>
                <img onClick={()=> {deleteTodo(id)}} className=" cursor-pointer" src={deletebutton} alt="" />
            </div>
        </div>
    )
 }
export default Todolist