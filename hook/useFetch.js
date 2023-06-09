import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../utils";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const options = {
        method: 'GET',
      //  url: `https://mocki.io/v1/${endpoint}`,
        url: `${SERVER_URL}${endpoint}`,
      headers: {},
        params: { ...query }
      };

    const fetchData = async () => {
        setIsLoading(true)
        
        try {
        const response = await axios.request(options)
        const responseData = response; // Store the data in a separate variable        
        setData(responseData.data);
        setIsLoading(false)
        } catch (error) {
            error = error
            alert('There is an error : ' , error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, refetch}
}


export default useFetch;