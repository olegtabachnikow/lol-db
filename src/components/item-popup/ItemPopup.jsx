import './ItemPopup.css';
import PropTypes from 'prop-types';
import goldIcon from '../../images/gold.webp';

function ItemPopup({ item, isHovered, positionX, positionY }) {
  return (
    <div
      className={`item-popup ${isHovered && 'item-popup_active'} ${
        positionX && 'item-popup_active-reverse-x'
      } ${positionY && 'item-popup_active-reverse-y'}`}
    >
      <span className='item-popup__title'>{item.name}</span>
      <div className='item-popup__image-and-price'>
        <img
          className='item-popup__image'
          src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${item.id}.png`}
          alt={`${item.name} icon`}
        />
        <span className='item-popup__price'>
          Total price: {item.gold.total}
          <img src={goldIcon} alt='gold' />
        </span>
      </div>
      <div
        className='item-popup__stats'
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
}

ItemPopup.propTypes = {
  item: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired,
  positionX: PropTypes.bool.isRequired,
  positionY: PropTypes.bool.isRequired,
};

export default ItemPopup;
