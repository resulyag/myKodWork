import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(url);
      setData(data.results);
      setJobsLoading(false);
    } catch (err) {
      setJobsError(err);
      setJobsLoading(false);
    }
  };
  return {data, jobsLoading, jobsError, fetchData};
}

export default useFetch;
