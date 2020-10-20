import React from 'react';
import {Header} from "./components";
import Home from "./pages/Home";
import Route from "react-router-dom/es/Route";
import Cart from "./pages/Cart";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/cart'} exact component={Cart}/>
                </div>
            </div>
        </div>
    );
}


export default App;
