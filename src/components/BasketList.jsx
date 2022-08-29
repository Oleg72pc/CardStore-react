import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
     order = [],
     handleBasketShow = Function.prototype, 
     removeFromBasket = Function.prototype 
    } = props;

  const totalPrice = order.reduce((summ,el) => {
    return summ + el.finalPrice * el.quantity
   }, 0)
  return <ul className="collection basket-list">
    <li className="collection-item active">Корзина</li>
    {
      order.length ? order.map(item => (
        <BasketItem 
        key={item.offerId}
         {...item} 
         removeFromBasket={removeFromBasket
        }/>
      )) : <li className="collection-item">Карзина пуста</li>
    }
    <li className="collection-item active">Общая стоимость: {totalPrice} 🪙</li>
    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
  </ul>

}

export { BasketList }
