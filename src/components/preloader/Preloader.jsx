import './Preloader.css';
import logo from '../../images/lol-logo.png';

function Preloader() {
  return (
    <div className='preloader-box'>
      <div className='preloader'>
        <i className='preloader-spinner'></i>
        <img
          className='preloader-logo'
          src={logo}
          alt='league of legends logo'
        />
      </div>
    </div>
  );
}
export default Preloader;
