import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import './index.css'

const root=document.getElementById('default');
ReactDOM.createRoot(root).render(
        <Provider store={store}>
            <App />
        </Provider>
)
