import React, { useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode', false);

    useEffect(()=> {
        if(value == true ){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    }, [value])

    const handleClick = e => {
        e.preventDefault();
        setValue(!value);
    }

    return [value, handleClick]
}

export default useDarkMode;