import './Header.css';
import logo from '../../images/lol-logo.png';
import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

function Header() {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div className='header__container'>
        <img
          onClick={() => navigate('/')}
          className='header__logo'
          src={logo}
          alt='logo'
        />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
