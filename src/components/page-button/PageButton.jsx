import './PageButton.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function PageButton({ text, destination, currentClass }) {
  const navigate = useNavigate();
  return (
    <div className={`page-button__border ${currentClass}`}>
      <button
        onClick={() => navigate(`/${destination}`)}
        className={`page-button ${currentClass + '_inner'}`}
      >
        {text}
      </button>
    </div>
  );
}

PageButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  currentClass: PropTypes.string.isRequired,
};

export default PageButton;
