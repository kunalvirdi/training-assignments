import styles from './login.module.css'
import Button from "../../layout/Button/Button.jsx";
import {useState} from "react";
import {authAction} from "../../store/auth-slice.js";
import {useDispatch} from "react-redux";

const initialState={
	username:'',
	password:''
}
const Login=()=>{
	const Dispatch=useDispatch();
	const [state,setState]=useState(initialState);
	const submitHandler=(e)=>{
		e.preventDefault()
		if(state.username!==import.meta.env.VITE_USERNAME || state.password!==import.meta.env.VITE_PASSWORD){
			alert('Wrong email or Password, Please try again!');
			return;
		}
		Dispatch(authAction.logIn(state.username))
		setState(initialState)
	}
	const usernameHandler=(e)=>{
		setState(prevState => {
			return{
				password: prevState.password,
				username: e.target.value
			}
		})
	}
	const passwordHandler=(e)=>{
		setState(prevState => {
			return{
				username: prevState.username,
				password: e.target.value
			}
		})
	}
	return(
		<form onSubmit={submitHandler}>
			<input onChange={usernameHandler} value={state.username} type="email" placeholder='Enter your Email here'/>
			<input onChange={passwordHandler} value={state.password} type="password" placeholder='Enter your Password here'/>
			<Button>Login</Button>
		</form>
	)
}
export default Login