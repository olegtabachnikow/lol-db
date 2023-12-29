import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterSpecialRecipe } from '../../utils/filters/item-filters';
import ItemPopup from '../item-popup/ItemPopup';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import lolLogo from '../../images/lol-logo.png';

function Item({ item, handleItemList, setCurrentItem }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [positionX, setPositionX] = React.useState(false);
  const [positionY, setPositionY] = React.useState(false);
  const itemList = useSelector((state) => state.itemList);
  function handleHover(e, bool) {
    if (isHovered) {
      const coordsX = e.clientX;
      const screenWidth = window.innerWidth;
      const coordsY = e.clientY;
      coordsX + 400 >= screenWidth ? setPositionX(true) : setPositionX(false);
      coordsY <= 400 ? setPositionY(true) : setPositionY(false);
    }
    setIsHovered(bool);
  }
  function handleClick() {
    item.into !== undefined
      ? handleItemList(true, item.into)
      : handleItemList(true, filterSpecialRecipe(true, itemList, item) || []);
    item.from !== undefined
      ? handleItemList(false, item.from)
      : handleItemList(false, filterSpecialRecipe(false, itemList, item) || []);
    setCurrentItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div
      onClick={handleClick}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      className='item'
    >
      <LazyLoadImage
        className='item__image'
        src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${item.id}.png`}
        alt={item.name}
        width='100%'
        height='100%'
        placeholderSrc={lolLogo}
      />
      <ItemPopup
        item={item}
        isHovered={isHovered}
        positionX={positionX}
        positionY={positionY}
      />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleItemList: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
};

export default Item;
