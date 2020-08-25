import React, { useState } from 'react';
import './Main.scss';
import { ProductCard } from '../../components';


export const MainScreen = (props) => {
    const [data, setData] = useState(mockData);

    return (
        <section className='main-screen'>
            <h4 className="screen-title">Ты сегодня покормил кота?</h4>
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
        headTextSecond: 'Котэ не одобряет?',
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
        footerText: {
            defaultText: 'Чего сидишь? Порадуй котэ',
            selectedText: 'Печень утки разварная с артишоками.'
        },
        disabled: false 
    }, {
        id: 1,
        headText: 'Сказочное заморское яство',
        headTextSecond: 'Котэ не одобряет?',
        title: 'Нямушка',
        subTitle: 'с рыбой',
        description: {
            amount: 40,
            gift: {
                amount: 2,
                item: 'мыши'
            }
        },
        volume: 2,
        footerText: {
            defaultText: 'Чего сидишь? Порадуй котэ',
            selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        disabled: false
    }, {
        id: 2,
        headText: 'Сказочное заморское яство',
        headTextSecond: 'Котэ не одобряет?',
        title: 'Нямушка',
        subTitle: 'с курой',
        description: {
            amount: 100,
            gift: {
                amount: 5,
                item: 'мышей',
                bonus: 'заказчик доволен'
            }
        },
        volume: 5,
        footerText: {
            defaultText: 'Чего сидишь? Порадуй котэ',
            selectedText: 'Филе из цыплят с трюфелями в бульоне.'
        },
        disabled: true
    },
]