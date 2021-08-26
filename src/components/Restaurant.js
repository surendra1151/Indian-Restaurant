import React, { useState, useEffect } from 'react';
import Data from './Data.js';
import Menu from './Menu';
import Navbar from './Navbar';
const uniqueList = [
  ...new Set(
    Data.map((curElem) => {
      return curElem.category;
    })
  ),
  'All',
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Data);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Data);
      return;
    }

    const updatedList = Data.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading === true ? (
        <div>
          <img className='logo' src='images/food_logo.jpg'></img>
        </div>
      ) : (
        <div>
          <Navbar filterItem={filterItem} menuList={menuList} />
          <Menu menuData={menuData} />
        </div>
      )}
    </>
  );
};

export default Resturant;
