function Cart(props) {
  const {quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="btn-large cyan pulse" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export {Cart}
