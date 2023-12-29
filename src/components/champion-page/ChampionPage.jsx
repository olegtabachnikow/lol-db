import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCharacter } from '../../actions/actions';
import './ChampionPage.css';
import { getCurrentChampion } from '../../utils/riot-api';
import Preloader from '../preloader/Preloader';
import mageSvg from '../../images/mage.svg';
import tankSvg from '../../images/tank.svg';
import marksmanSvg from '../../images/marksman.svg';
import supportSvg from '../../images/support.svg';
import fighterSvg from '../../images/fighter.svg';
import assassinSvg from '../../images/assassin.svg';
import SkillSet from '../skill-set/SkillSet';
import PageButton from '../page-button/PageButton';

function ChampionPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageCounter, setImageCounter] = React.useState(0);
  const [description, setDescription] = React.useState('');
  const [currentRoles, setCurrentRoles] = React.useState([]);
  const [currentDifficulty, setCurrentDifficulty] = React.useState(0);
  const currentChampion = useSelector((state) => state.currentChampion);
  const championName = useParams();
  const navigate = useNavigate();

  function getSelectedChampion() {
    setIsLoading(true);
    const currentName = setUrlTarget();
    getCurrentChampion(currentName)
      .then((res) => {
        setCharacter(res.data[currentName]);
        setCurrentRoles(Object.values(res.data[currentName].tags));
        setCurrentDifficulty(res.data[currentName].info.difficulty);
      })
      .catch(() => {
        setIsLoading(false);
        navigate('/error-page');
      });
  }

  function setUrlTarget() {
    const arr = championName.championName.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  }
  React.useEffect(() => {
    const loadTimeout = setTimeout(setIsLoading, 2000, false);
    return () => clearTimeout(loadTimeout);
  }, []);
  React.useEffect(() => {
    getSelectedChampion();
    return () => setCharacter({});
  }, []);
  function getRole(role) {
    switch (role) {
      case 'Mage':
        return mageSvg;
      case 'Assassin':
        return assassinSvg;
      case 'Tank':
        return tankSvg;
      case 'Support':
        return supportSvg;
      case 'Marksman':
        return marksmanSvg;
      case 'Fighter':
        return fighterSvg;
      default:
        return null;
    }
  }
  function getCurrentDifficultyWord() {
    if (currentDifficulty >= 4 && currentDifficulty <= 7) {
      return 'Moderate';
    } else if (currentDifficulty >= 8) {
      return 'High';
    } else {
      return 'Low';
    }
  }
  return (
    <section className='champion-page'>
      {isLoading ? (
        <div className='champion-page__preloader-overlay'>
          <Preloader />
        </div>
      ) : (
        <div className='champion-info'>
          <div className='champion-card'>
            <PageButton
              text='Back to champion list'
              destination='champions/'
              currentClass='champion-page__button'
            />
            <img
              className='champion-card__image'
              src={
                currentChampion.id
                  ? `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChampion.id}_${imageCounter}.jpg`
                  : null
              }
              alt={currentChampion.name}
            />
            <div className='champion-info__skins-container'>
              <p className='champion-info__skins-title'>AVAILABLE SKINS</p>
              <div className='champion-info__available-skins'>
                {!!currentChampion.skins &&
                  currentChampion.skins.map((el) => {
                    return (
                      <button
                        className={`champion-info__skin ${
                          imageCounter === el.num &&
                          'champion-info__skin_active'
                        }`}
                        onClick={() => setImageCounter(el.num)}
                        key={el.num}
                      >
                        <img
                          className='champion-info__skin-image'
                          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChampion.id}_${el.num}.jpg`}
                          alt={el.name}
                          loading='lazy'
                        />
                        {el.name === 'default' ? currentChampion.name : el.name}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
          <div
            className='champion-background'
            style={{
              backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChampion.id}_${imageCounter}.jpg)`,
            }}
          />
          <div className='champion-description'>
            <div className='champion-titles'>
              <h2 className='champion__subtitle'>{currentChampion.title}</h2>
              <h1 className='champion__title'>{currentChampion.name}</h1>
            </div>
            <div className='champion-character-description'>
              <p className='champion-character-description__text'>
                {currentChampion.lore}
              </p>
              <div className='champion-skills'>
                <div className='champion-stats-box'>
                  <div className='champion-roles-box'>
                    {currentRoles.length &&
                      currentRoles.map((el, i) => {
                        return (
                          <div key={i} className='champion-role-container'>
                            <img
                              className='class-icon'
                              src={getRole(el)}
                              alt={el}
                            />
                            <span className='champion-text'>Role</span>
                            <span className='champion-text champion-text_yellow'>
                              {el}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                  <div className='champion-difficulty'>
                    <div className='champion-difficulty__box'>
                      <div className='champion-difficulty__graph-box'>
                        <span className='champion-difficulty__graph champion-difficulty__graph_active' />
                        <span
                          className={`champion-difficulty__graph ${
                            currentDifficulty >= 4 &&
                            'champion-difficulty__graph_active'
                          }`}
                        />
                        <span
                          className={`champion-difficulty__graph ${
                            currentDifficulty >= 8 &&
                            'champion-difficulty__graph_active'
                          }`}
                        />
                      </div>
                      <span className='champion-text'>Difficulty</span>
                      <span className='champion-text champion-text_yellow'>
                        {getCurrentDifficultyWord()}
                      </span>
                    </div>
                  </div>
                </div>
                <SkillSet
                  description={description}
                  setDescription={setDescription}
                />
                <p
                  className='skills__description'
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ChampionPage;
