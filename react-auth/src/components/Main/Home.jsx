import Main from "../../Layout/Main/Main.jsx";
import {useDispatch, useSelector} from "react-redux";
import {modeAction} from "../../store/authSlice.js";

const Home=()=>{
	const Dispatch=useDispatch()
	const auth=useSelector(state=>state.mode)
	return(
		<Main>
			<h1>Welcome back {auth.email} apka Swagat hai...</h1>
			<div>
				<button onClick={()=>{Dispatch(modeAction.setLoggedIn(false))}}>Click here to logout.</button>
			</div>
		</Main>
	)
}
export default Home