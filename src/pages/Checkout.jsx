import React from 'react'
import { Button } from '../components'

export const Checkout = (props) => {
    const clickHandler = () => {
        alert('Заказ принят в обработку, Вам перезвонят!')
    }

    return(
        <div className="checkout">
            <label htmlFor="address">Введите Адрес доставки</label><br/>
            <input type="text" name="address" id="address"/><br/>
            <label htmlFor="number">Введите номер карты</label><br/>
            <input type="text" name="number" id="number"/><br/>
            <label htmlFor="cardholder">Введите имя держателя карты</label><br/>
            <input type="text" name="cardholder" id="cardholder"/><br/>
            <label htmlFor="date">Введите срок действия карты</label><br/>
            <input type="text" name="date" id="date"/><br/>
            <label htmlFor="cvc">Введите CVC-код</label><br/>
            <input type="password" name="cvc" id="cvc"/><br/>
            <Button onClick={() => clickHandler()}>Завершить</Button>
        </div>
    )
}
