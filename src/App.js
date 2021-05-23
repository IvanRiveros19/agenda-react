import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
//redux
import {Provider} from "react-redux";
import store from "./redux/store";

import Login from "./components/SignIn/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
