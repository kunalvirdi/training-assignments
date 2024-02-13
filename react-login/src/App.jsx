import Main from "./layout/Main.jsx";
import Login from "./components/Login/Login.jsx";
import {useSelector} from "react-redux";
import Home from "./components/Home/Home.jsx";
const App=() => {
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    return(
        <Main>
            {!isLoggedIn && <Login/>}
            {isLoggedIn && <Home/>}
        </Main>
    )
}

export default App
