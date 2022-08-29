import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from '../components/Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

  const addToBasket = (item) => {
    console.log(order);
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.offerId === item.offerId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.offerId !== itemId)
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    }).then(response => response.json())
      .then((date) => {
        date.shop && setGoods(date.shop);
        setLoading(false);
      })
  }, [])

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (<Preloader />) : (<GoodsList goods={goods} addToBasket={addToBasket} />)}
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>
      }
    </main>
  )
}

export { Shop };
