import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const handleClick = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    return [value, handleClick]
}