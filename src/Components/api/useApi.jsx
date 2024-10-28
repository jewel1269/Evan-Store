// useApi.js
import { useState, useEffect } from 'react';

const useApi = () => {
    const [apiUrl, setApiUrl] = useState('');

    useEffect(() => {

        setApiUrl(process.env.REACT_APP_API);
    }, []);

    return apiUrl;
};

export default useApi;
