import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";

function Home(props) {
    return (
        <div className="container">
            <div className="content__top">

                <Categories items={
                    ['Мясные', 'Вегетрианские', 'Гриль', 'Острые', 'Закрытые']
                }/>

                <SortPopup
                    items={[{name: 'популряности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавит', type: 'aplphabet'}]}/>


            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.itemsPizza.map(obj => <PizzaBlock key={obj.id}
                                                            {...obj}
                    />)
                }
            </div>
        </div>
    );
}

export default Home;