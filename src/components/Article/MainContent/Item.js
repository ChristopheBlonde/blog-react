import "../MainContent/Item.css";

const Item = (props) => {
  return (
    <div className="mainContent">
      <h2>{props.itemTitle}</h2>
      <h3>{props.itemSubtitle} </h3>
      <img src={props.itemPicture} alt={props.pictureAlt} />
      <p>{props.itemDescription} </p>
    </div>
  );
};

export default Item;
