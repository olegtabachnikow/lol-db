import './CharacterGridItem.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import lolLogo from '../../images/lol-logo.png';

function CharacterGridItem({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/champions/${item.id}`)}
      className='character-grid-item'
    >
      <div className='character-grid-item__corner' />
      <div className='character-grid-item__title-wrapper'>
        <span className='character-grid-item__title'>
          {item.name.toUpperCase()}
        </span>
      </div>
      <div className='character-grid-item__image-wrapper'>
        <LazyLoadImage
          className='character-grid-item__image'
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
          alt={item.name}
          width='100%'
          height='100%'
          placeholderSrc={lolLogo}
        />
        <div />
      </div>
    </div>
  );
}
CharacterGridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CharacterGridItem;
