import {createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({
	name:'authSlice',
	initialState:{
		isLoggedIn:false,
		username:'',
		theme:'light'
	},
	reducers:{
		logIn(state,action){
			state.isLoggedIn=true;
			state.username=action.payload
		},
		logOut(state){
			state.isLoggedIn=false;
			state.username=''
		},
		changeTheme(state){
			state.theme=state.theme==='light'?'dark':'light';
		}
	}
})
export const authAction=authSlice.actions;
export default authSlice