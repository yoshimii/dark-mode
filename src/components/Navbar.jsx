import React, {useState} from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = ({coinData}) => {
    const [darkMode, setDarkMode] = useDarkMode();
    const [coinValue, setCoin] = useState('');
    const [search, setSearch] = useState('');

    let updateSearch = e => {
      setSearch(e.target.value)
    }
    let handleSearch = e => {
        e.preventDefault();
        let currentList = []; // hold original list
        let newList = []; // hold filtered list
        if (e.target.value !== '') {
            currentList = coinData;
            console.log(currentList)
            newList = currentList.map(coin => {

                return coin.name.toLowerCase()
            })

        } else {
            newList = coinData;
        }
        setCoin(newList);
        console.log(coinValue)
    }

    return([


        <nav className="navbar">
            <h1>Crypto Tracker</h1>
            <form onSubmit={handleSearch}
                className='search-container'>
                <input type='text'
                    value={search}
                    id='search-bar'
                    placeholder='Find your coin'
                    onChange={updateSearch}></input>
            </form>
            <div className="dark-mode__toggle">
                <div onClick={setDarkMode}
                    className={
                        darkMode ? 'toggle toggled' : 'toggle'
                    }/>
            </div>
        </nav>
    ]);
};

export default Navbar;
