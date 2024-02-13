import {Auth} from "./components/index.js";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Main/Home.jsx";
import {useSelector} from "react-redux";

const App=()=>{
    const isLoggedIn=useSelector(state=>state.mode.loggedIn)
    return (
        <>
        {isLoggedIn?<Navigate to='/home'/>:<Navigate to='/'/>}
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<p>Invalid Route</p>}/>
        </Routes>
        </>
  )
}

export default App
