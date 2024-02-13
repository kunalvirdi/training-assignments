import {useDispatch} from "react-redux";
import {todoAction} from "../../store/todoItems-slice.js";
import {useState} from "react";
import './form.css'
import {createPortal} from "react-dom";

const Form=()=>{
    const dispatch=useDispatch();
    const [task,setTask]=useState('')
    const id=`$todo-${Date.now()}`

    const addTodo=(e)=>{
        e.preventDefault()
        if(task===''){
            alert('Enter todo then click on submit!')
            return;
        }
        const todoObject={
            id,
            task:task,
            isCompleted:false
        }
        dispatch(todoAction.addTodo(todoObject))
        setTask('')
    }

    const setTodo=(e)=>{
        setTask(e.target.value)
    }
    return(
        <>
            <form onSubmit={addTodo}>
                <input type="text" onChange={setTodo} value={task} placeholder='Enter your task here.'/>
            </form>
        </>

    )
}
export default Form;