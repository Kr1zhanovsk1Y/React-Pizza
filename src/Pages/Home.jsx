import React from 'react'
import { Categories, SortPopup, Pizza, LoadingBlock } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'



const categoryNames = [

    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortItems = [{ name: "Популярности", type: "popular", order: 'desc' },
{ name: "Цене", type: "price", order: 'desc' },
{ name: "Алфавиту", type: "name", order: 'asc' },
]

function Home() {

    const dispatch = useDispatch();


    const items = useSelector(({ pizza }) =>
        pizza.items
    )

    const cartItems = useSelector(({ cart }) =>
        cart.items
    )


    const isLoaded = useSelector(({ pizza }) =>
        pizza.isLoaded
    )


    const { category, sortBy } = useSelector(({ filter }) => filter)

    const cartDispatch = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    React.useEffect(() => {

        dispatch(fetchPizzas(sortBy, category))


    }, [sortBy, category])

    const onSelectCategory = React.useCallback((index) => dispatch(setCategory(index)))

    const onSelectSortBy = React.useCallback((type) => dispatch(setSortBy(type)))

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}></Categories>


                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortBy}

                />


            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoaded ?
                    items.map((obj) =>
                        <Pizza cartCount={cartItems[obj.id] && cartItems[obj.id].items.length} onClickAddPizza={cartDispatch} key={obj.id} {...obj} />) :
                    Array(10).fill(0).map((_, index) => (<LoadingBlock key={index} />))}
            </div>

        </div>
    )
}

export default Home
