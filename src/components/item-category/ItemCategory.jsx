import React from "react";
import "./ItemCategory.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Item from "../item/Item";
import { filterItemsCategory } from "../../utils/filters/item-filters";

function ItemCategory({ title, filterCase, handleItemList, setCurrentItem }) {
  const [itemArray, setItemArray] = React.useState([]);
  const itemList = useSelector((state) => state.itemList);
  React.useEffect(() => {
    itemList.length &&
    setItemArray(filterItemsCategory(itemList, filterCase));
  }, [itemList, filterCase]);
  return (
    <>
      <h2 className="item-category__title">{title}</h2>
      <div className="item-category__list" style={{ display: "flex" }}>
        {itemArray.length
          ? itemArray.map((el, i) => (
              <Item
                key={i}
                item={el}
                handleItemList={handleItemList}
                setCurrentItem={setCurrentItem}
              />
            ))
          : null}
      </div>
    </>
  );
}

ItemCategory.propTypes = {
  title: PropTypes.string.isRequired,
  filterCase: PropTypes.string.isRequired,
  handleItemList: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
};

export default ItemCategory;
