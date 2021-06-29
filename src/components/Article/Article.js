import Item from "./MainContent/Item";
import ItemSide from "./SideContent/ItemSide";

const Article = (props) => {
  return (
    <div className="article">
      <Item
        itemTitle={props.itemTitle}
        itemSubtitle={props.itemSubtitle}
        itemPicture={props.itemPicture}
        itemDescription={props.itemDescription}
      />
      {props.itemSideTitle &&
        props.itemSidePicture &&
        props.itemSideDescription && (
          <ItemSide
            itemTitle={props.itemSideTitle}
            itemPicture={props.itemSidePicture}
            itemDescription={props.itemSideDescription}
          />
        )}
    </div>
  );
};

export default Article;
