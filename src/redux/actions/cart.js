export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})


export const clearCart = () => ({
    type: 'CLEAR_CART',
})


export const removePizza = (id) => ({
    type: 'REMOVE_PIZZA',
    payload: id
})

export const plusPizzaItem = (id) => ({
    type: 'PLUS_PIZZA',
    payload: id
})

export const minusPizzaItem = (id) => ({
    type: 'MINUS_PIZZA',
    payload: id
})