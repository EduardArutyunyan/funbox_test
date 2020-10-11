import React, { useState } from 'react';
import { EditButton } from './EditButton';
import { EditCheckbox } from './EditCheckbox';
import { EditInput } from './EditInput';

export const ListView = ({listTitle, data, onUpdate}) => {
    const [collapsed, setCollapsed] = useState(false)
    const [headText, setHeadText] = useState(data.headText);
    const [headTextSecond, setHeadTextSecond] = useState(data.headTextSecond);
    const [title, setTitle] = useState(data.title);
    const [subTitle, setSubTitle] = useState(data.subTitle);
    const [volume, setVolume] = useState(data.volume);
    const [amount, setAmount] = useState(data.description.amount);
    const [giftAmount, setGiftAmount] = useState(data.description.gift.amount);
    const [footerDefaultText, setFooterDefaultText] = useState(data.footerText.defaultText);
    const [footerSelectedText, setFooterSelectedText] = useState(data.footerText.selectedText);
    const [available, setAvailable] = useState(data.available);

    function handleUpdate() {
        let product = {
            id: data.id,
            headText: headText,
            headTextSecond: headTextSecond,
            title: title,
            subTitle: subTitle,
            description: {
                amount: amount,
                gift: {
                    amount: giftAmount,
                }
            },
            volume: volume,
            footerText: {
                defaultText: footerDefaultText,
                selectedText: footerSelectedText
            },
            available: available 
        }

        onUpdate(product);
    }

    return (
        <div className="list-view">
            <span 
                className={"list-view__title" + (collapsed ? ' list-view__title_open' : " list-view__title_closed")}
                onClick={() => setCollapsed(!collapsed)}
            >
                {listTitle}
            </span>
            <div className={"list-view__body" + (collapsed ? ' list-view__body_collapsed' : '') }>
                
                        <EditInput 
                            dataField={headText}
                            label={'Заголовок'}
                            onEdit={setHeadText}
                        />
                        <EditInput 
                            dataField={headTextSecond}
                            label={'Заголовок при уходе с товара'}
                            onEdit={setHeadTextSecond}
                        />
                        <EditInput 
                            dataField={title}
                            label={'Наименование'}
                            onEdit={setTitle}
                        />
                        <EditInput 
                            dataField={subTitle}
                            label={'Начинка'}
                            onEdit={setSubTitle}
                        />
                        <EditInput 
                            dataField={amount}
                            label={'Количество порций'}
                            onEdit={setAmount}
                        />
                        <EditInput 
                            dataField={giftAmount}
                            label={'Количество мышей в подарок'}
                            onEdit={setGiftAmount}
                        />
                        <EditInput 
                            dataField={volume}
                            label={'Объем упаковки'}
                            onEdit={setVolume}
                        />
                        <EditInput 
                            dataField={footerDefaultText}
                            label={'Текст под товаром'}
                            onEdit={setFooterDefaultText}
                        />
                        <EditInput 
                            dataField={footerSelectedText}
                            label={'Текст под товаром, при выборе'}
                            onEdit={setFooterSelectedText}
                        />
                        <EditCheckbox 
                            data={available}
                            onChange={setAvailable}
                        />

                        <EditButton 
                            title="Сохранить"
                            onButtonClick={handleUpdate}
                        />
            </div>
        </div>
    )
}