function Card(props) {
   return (
      <div className="cards">
         {props.data.map((arg) => (
            <div className="item">
               <h2 className="item__title">{arg.title}</h2>
               <img className="item__image" src={arg.image} alt="food" />
               <div className="item__description">{arg.description}</div>
            </div>
         ))}
      </div>
   );
}

export default Card;