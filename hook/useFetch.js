import { useState, useEffect } from "react";
import { Axios } from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://mocki.io/v1/${endpoint}`,
        headers: {},
        params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'}
      };


}