import React from 'react';
import {Header} from "./components";
import Home from "./pages/Home";
import axios from 'axios'

import Cart from "./pages/Cart";
import Route from "react-router-dom/es/Route";

function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path={'/'} exact render={() => <Home itemsPizza={pizzas}/>}/>
                    <Route path={'/cart'} exact component={Cart}/>
                </div>
            </div>
        </div>
    );
}


export default App;
