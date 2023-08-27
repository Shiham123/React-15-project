import { useEffect, useState } from 'react';
import Pagination from './utilities';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(Pagination(data));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return { loading, data };
};
