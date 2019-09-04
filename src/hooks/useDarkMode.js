import React, { useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(()=> {
        if(key === 'true'){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    }, [key])

    const handleClick = e => {
        e.preventDefault();
        setValue(!value);
    }

    return [value, handleClick]
}

export default useDarkMode;