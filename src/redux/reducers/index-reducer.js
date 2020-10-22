import {combineReducers} from "redux";
import filtersReducer from "./filters-reducer";
import pizzasReducer from "./pizzas-reducer";

 const rootReducer = combineReducers({
    filter:filtersReducer,
    pizzas:pizzasReducer
})

export default rootReducer
