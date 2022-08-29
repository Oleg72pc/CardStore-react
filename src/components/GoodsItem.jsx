function GoodsItem(props) {
  const { offerId, price, granted, addToBasket = Function.prototype } = props;
  const {finalPrice} = price
  const {description, name, images, rarity, type} = granted[0]
  const {full_background} = images
  const {name: rarityTitle} = rarity
  const {name: typeTitle} = type


  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <div>Описание: {description}</div>
        <div>Тип: {typeTitle}</div>
        <div>Редкость: {rarityTitle}</div>
      </div>
      <div className="card-action">
       <button className="btn" 
       onClick={() => 
       addToBasket({
        offerId,
        name,
        finalPrice,
       })}
       >Купить за {finalPrice} 🪙</button></div>
      </div>
  )
}
export { GoodsItem };


// name, description, price, full_background
