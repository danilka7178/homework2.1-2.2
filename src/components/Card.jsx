function Card({ title, image, description }) {
   return (
      <div className="card">
         <h2 className="card__title">{title}</h2>
         <img className="card__image" src={image} alt="food" />
         <div className="card__description">{description}</div>
      </div>
   );
}

export default Card;