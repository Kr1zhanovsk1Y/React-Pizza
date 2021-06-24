import { combineReducers } from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'

const rootReducer = combineReducers({
    filter: filtersReducer,
    pizza: pizzasReducer,
    cart: cartReducer
})



export default rootReducer