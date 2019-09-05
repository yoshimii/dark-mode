import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = ({coinData}) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [coinValue, setCoin] = useState('');

 
// let handleSearch = e => {
//   e.preventDefault();
//   setCoin(event.target.value);
//   console.log(coin.value)
// }

let submitHandler = e => {
  setCoin(coinValue);

}
 

let handleSearch = e => {
  let currentList = [];//hold original list
  let newList = [];//hold filtered list
  if (e.target.value !== '') {
    currentList = coinData;
    console.log(currentList)
    newList= currentList.map(coin => {

        return coin.name.toLowerCase()
      })
      console.log(newList)
      // const filter = e.target.value.toLowerCase();
      // return lower.includes(filter);
  }else {
    newList = coinData;
  }
  setCoin(newList);
}

  return ([


    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <form onSubmit={submitHandler}
      className='search-container'>
    <input 
    type='text'
    value={coinValue}
    id='search-bar'
    placeholder='Find your coin'
    onChange={handleSearch}
    ></input>
  </form>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  ]);
};

export default Navbar;
