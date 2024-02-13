import {useSelector} from "react-redux";
import Button from "../../layout/Button/Button.jsx";
import {authAction} from "../../store/auth-slice.js";
import {useDispatch} from "react-redux";
import styles from './home.module.css'

const Home=()=>{
	const username=useSelector(state=>state.auth.username)
	const Dispatch=useDispatch();
	const clickHandler=()=>{
		Dispatch(authAction.logOut());
	}
	return(
		<div className={styles.home}>
			<div>You are successfully login as {username}</div>
			<Button clickHandler={clickHandler}>Click here to Logout</Button>
		</div>
	)
}
export default Home;