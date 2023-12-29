import './ItemCost.css';
import goldImage from '../../images/gold.webp';
import PropTypes from 'prop-types';

function ItemCost({ currentItem }) {
  return (
    <div className='item-cost'>
      {currentItem.gold ? (
        <>
          <span className='item-cost__text'>
            {`Price: ${currentItem.gold.base}`}
            <img className='item-cost__image' src={goldImage} alt='coins' />
          </span>
          <span className='item-cost__text'>
            {`Sell: ${currentItem.gold.sell}`}
            <img className='item-cost__image' src={goldImage} alt='coins' />
          </span>
          <span className='item-cost__text'>
            {`Total: ${currentItem.gold.total}`}
            <img className='item-cost__image' src={goldImage} alt='coins' />
          </span>
        </>
      ) : null}
    </div>
  );
}

ItemCost.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemCost;
