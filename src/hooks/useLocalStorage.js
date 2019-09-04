//it can be used just like useState, but it will persist data to localStorage
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
//define state --> wil receive an initial value to set up our localStorage Property
const item = JSON.(parselocalStorage.getItem(key));

const [ storedValue, setStoredValue ] =useState(item ||initialValue);
//define a setter function that set's a value to localStorage when called
const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value))
    setStoredValue(value);
    };
return [ storedValue, setValue ];
};
