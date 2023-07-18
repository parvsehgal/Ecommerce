import "./card.css";
function Card({ title, description, price }) {
  return (
    <div className="cardDiv">
      <p>{title}</p>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Card;
