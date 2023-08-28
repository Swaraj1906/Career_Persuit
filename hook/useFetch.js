import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [ data , setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '0f485c6a9dmshdeda55db236b2a7p1680efjsn66b8c07b1a0c',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {
   ...query
  },
 
};

const fetchData = async () => {
    setIsLoading = true;

    try {
            const response = await axios.request
            (options);

            setData = response.data.data;
            setIsLoading = false;
    } catch (error) {
        setError(error)
        alert('There is an error')
    }finally {
        isLoading(false);
    }
}

useEffect(() => {
    fetchData();
}, []);

const refetch = () => {
    setIsLoading(true);
    fetchData();
}

return {data, isLoading, error, refetch};
}

export default useFetch