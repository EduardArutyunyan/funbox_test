import React from 'react';
import './Main.scss';
import { ProductCard } from '../../components';


export const MainScreen = (props) => {


    return (
        <section className='main-screen'>
            <p>Главная страница</p>
            <ProductCard />
        </section>
    )
}