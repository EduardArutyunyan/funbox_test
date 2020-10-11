import React, { useState } from 'react';
import './Main.scss';
import { ProductCard } from '../../components';
import { mockData } from '../../tool/mockData';
import { EditTools } from '../../components/ProductEdit/EditTools';


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

            <EditTools data={data} onDataEdit={(editedData) => setData(editedData)}/>
        </section>
    )
}