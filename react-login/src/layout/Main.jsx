import styles from './main.module.css'
import MoonIcon from "../assets/MoonIcon.jsx";
import SunIcon from "../assets/SunIcon.jsx";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../store/auth-slice.js";
import {useEffect} from "react";
// eslint-disable-next-line react/prop-types
const Main=({children})=>{
	const theme=useSelector(state=>state.auth.theme)
	const Dispatch=useDispatch()
	const clickHandler=()=>{
		Dispatch(authAction.changeTheme())
	}
	const root=document.getElementById('default')
	useEffect(()=>{
		if(theme==='light'){
			root.classList.remove('dark')
		}else{
			root.classList.add('dark')
		}
	},[theme])
	const Icon=theme==='light'?<MoonIcon/>:<SunIcon/>
	return(
		<main className={styles.main}>
			<div onClick={clickHandler} className={styles.icon}>
				{Icon}
			</div>
			{children}
		</main>
	)
}
export default Main;