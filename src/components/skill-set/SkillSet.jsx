import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './SkillSet.css';
import SkillButton from '../skill-button/SkillButton';

function SkillSet({ description, setDescription }) {
  const currentChampion = useSelector((state) => state.currentChampion);
  return (
    <div className='skillset'>
      {currentChampion.name && (
        <SkillButton
          image={currentChampion.passive.image.full}
          setDescription={setDescription}
          description={currentChampion.passive.description}
          currentDescription={description}
          isActive={false}
        />
      )}
      {currentChampion.name &&
        currentChampion.spells.map((el, i) => {
          return (
            <SkillButton
              key={i}
              image={el.image.full}
              setDescription={setDescription}
              description={el.description}
              currentDescription={description}
              isActive={true}
            />
          );
        })}
    </div>
  );
}

SkillSet.propTypes = {
  setDescription: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillSet;
