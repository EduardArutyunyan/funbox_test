import React, { useState } from 'react';
import './Main.scss';
import { ProductCard } from '../../components';


export const MainScreen = (props) => {
    const [data, setData] = useState(mockData);

    return (
        <section className='main-screen'>
            <p>Главная страница</p>
            <div className="content">
                {data.map(item => {
                    return (
                        <ProductCard data={item} key={item.id.toString()}/>
                    )
                })}
            </div>
        </section>
    )
}


const mockData = [
    {
        id: 0,
        headText: 'Сказочное заморское яство',
        title: 'Нямушка',
        subTitle: 'с фуа-гра',
        description: {
            amount: 10,
            gift: {
                amount: 0,
                item: 'мышь'
            }
        },
        volume: 0.5,
        image: 'cat.png'
    }, {
        id: 1,
        headText: 'Сказочное заморское яство',
        title: 'Нямушка',
        subTitle: 'с рыбой',
        description: {
            amount: 40,
            gift: {
                amount: 2,
                item: 'мыши'
            }
        },
        volume: 0.5,
        image: 'cat.png'
    }, {
        id: 2,
        headText: 'Сказочное заморское яство',
        title: 'Нямушка',
        subTitle: 'с курой',
        description: {
            amount: 100,
            gift: {
                amount: 5,
                item: 'мышей'
            }
        },
        volume: 0.5,
        image: 'cat.png'
    },
]