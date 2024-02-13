import {Main} from './Layouts'
import {Form,List} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {todoAction} from "./store/todoItems-slice.js";
import {useEffect} from "react";

const App=()=> {

    if(!localStorage.getItem('todos')){
        localStorage.setItem('todos',JSON.stringify([]))
    }
    const todos=useSelector(state=>state.todo);
    const Dispatch=useDispatch()
    useEffect(()=>{
        const todos=localStorage.getItem('todos')
        Dispatch(todoAction.updateTodos(JSON.parse(todos)))
    },[Dispatch])

    return (
        <Main>
            <Form/>
            {!todos.length && <div>Add your todos here...</div>}
            <List/>
        </Main>
    )
}

export default App
