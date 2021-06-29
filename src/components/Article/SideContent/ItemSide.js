import "../SideContent/ItemSide.css";

const ItemSide = (props) => {
  return (
    <div className="sideContent">
      <h2>{props.itemTitle}</h2>
      <img src={props.itemPicture} alt={props.pictureAlt} />
      <p>{props.itemDescription} </p>
    </div>
  );
};

export default ItemSide;
