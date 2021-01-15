function Card({ title, image, description }) {
   return (
      <div className="item">
         <h2 className="item__title">{title}</h2>
         <img className="item__image" src={image} alt="food" />
         <div className="item__description">{description}</div>
      </div>

   );
}

export default Card;