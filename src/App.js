import React from 'react';
import {Header} from "./components";
import Home from "./pages/Home";
import axios from 'axios'

import Cart from "./pages/Cart";
import Route from "react-router-dom/es/Route";
import {setPizzas as setPizzasAction} from "./redux/actions/pizza";
import {connect} from "react-redux";

// function App() {
//
//
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, [])
//
//
// }

class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.dispatch(setPizzasAction(data.pizzas))
        })
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route path={'/'} exact render={() => <Home itemsPizza={this.props.items}/>}/>
                        <Route path={'/cart'} exact component={Cart}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
