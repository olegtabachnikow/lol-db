import React from 'react';
import './ItemList.css';
import { getItems } from '../../utils/riot-api';
import Item from '../item/Item';
import { setItemList } from '../../actions/actions';
import { useSelector } from 'react-redux';
import ItemCategory from '../item-category/ItemCategory';
import ItemCost from '../item-cost/ItemCost';
import lolLogo from '../../images/lol-logo.png';
import Preloader from '../preloader/Preloader';
import { useNavigate } from 'react-router-dom';

function ItemList() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentItem, setCurrentItem] = React.useState({});
  const [prevItem, setPrevItem] = React.useState([]);
  const [nextItem, setNextItem] = React.useState([]);
  const itemList = useSelector((state) => state.itemList);
  const navigate = useNavigate();

  function handleItemList(boolean, data) {
    if (!data.length) {
      boolean ? setNextItem([]) : setPrevItem([]);
      return;
    }
    let arr = [];
    data.forEach((currentId) => {
      let filteredList = itemList.filter((el) => el.id === currentId);
      arr.push(...filteredList);
    });
    boolean ? setNextItem(arr) : setPrevItem(arr);
  }
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getItemList();
  }, []);

  function getItemList() {
    setIsLoading(true);
    getItems()
      .then((res) => {
        const arr = Object.entries(res.data).map((el) => {
          return { id: el[0], ...el[1] };
        });
        setItemList(arr);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        navigate('/error-page');
      });
  }
  return (
    <section className='item-list'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h1 className='item-list__title'>List of items</h1>
          <h2 className='item-list__subtitle'>
            detailed information about ingame items
          </h2>
          <div className='item-list__current-item-container'>
            <div className='item-list__background-image' />
            <div className='item-list__current'>
              <h1 className='item-list__current-title'>
                {currentItem.name || 'Select Item'}
              </h1>
              <p className='item-list__current__plaintext'>
                {currentItem.plaintext}
              </p>
              <div className='item-list__image-and-cost-wrapper'>
                <figure className='item-list__current-image-wrapper'>
                  <img
                    className='item-list__current-image'
                    src={
                      currentItem.id
                        ? `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${currentItem.id}.png`
                        : lolLogo
                    }
                    alt=''
                  />
                </figure>
                <div className='item-list__current-cost'>
                  <ItemCost currentItem={currentItem} />
                </div>
              </div>
              <div
                className='item-list__current-text'
                dangerouslySetInnerHTML={{ __html: currentItem.description }}
              ></div>
            </div>
            <div className='item-list__build'>
              <h3 className='item-list__build-title'>Builds from</h3>
              <div className='item-list__prev'>
                {prevItem.length
                  ? prevItem.map((el, i) => (
                      <Item
                        key={i}
                        item={el}
                        handleItemList={handleItemList}
                        setCurrentItem={setCurrentItem}
                      />
                    ))
                  : null}
              </div>
              <h3 className='item-list__build-title'>Builds into</h3>
              <div className='item-list__next'>
                {nextItem.length
                  ? nextItem.map((el, i) => (
                      <Item
                        key={i}
                        item={el}
                        handleItemList={handleItemList}
                        setCurrentItem={setCurrentItem}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className='item-list__categories'>
            <ItemCategory
              filterCase='START'
              title='starter items'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='BASIC'
              title='basic items'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='EPIC'
              title='epic items'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='LEGENDARY'
              title='legendary'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='MYTHIC'
              title='mythic items'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='BOOTS'
              title='boots'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='CONSUMABLE'
              title='potions and consumables'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='TRINKET'
              title='trinkets'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
            <ItemCategory
              filterCase='OTHER'
              title='other'
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default ItemList;
