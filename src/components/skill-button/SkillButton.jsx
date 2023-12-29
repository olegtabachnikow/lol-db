import PropTypes from 'prop-types';
import './SkillButton.css';

function SkillButton({
  currentDescription,
  setDescription,
  description,
  isActive,
  image,
}) {
  function handleClick() {
    currentDescription === description
      ? setDescription('')
      : setDescription(description);
  }
  return (
    <div
      onClick={handleClick}
      className={`skill-button ${
        currentDescription === description && 'skill-button_active'
      }`}
    >
      <img
        src={
          isActive
            ? `http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${image}`
            : `http://ddragon.leagueoflegends.com/cdn/12.18.1/img/passive/${image}`
        }
        alt='skill icon'
      />
    </div>
  );
}

SkillButton.propTypes = {
  currentDescription: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};
export default SkillButton;
