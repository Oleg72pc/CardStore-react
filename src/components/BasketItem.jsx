function BasketItem(props) {
  const {
    offerId,
    name,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype
  } = props;

  return (
    <li className="collection-item">
      {name} x{quantity} = {finalPrice * quantity} 🪙
      <span className="secondary-content basket-delite"><i className="material-icons" onClick={() => removeFromBasket(offerId)}>close</i></span>
    </li>
  )
}

export { BasketItem }
