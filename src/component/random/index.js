import React, {useState, useEffect} from 'react';
import useSWR from 'swr';

import './index.css';

const Random = () => {
    const [joke, setJoke] = useState('');
    const [timeToNewJoke, setTimeToNewJoke] = useState(10);

    const API_URL = 'https://api.chucknorris.io/jokes/random';

    const fetcher = url => fetch(url).then(r => r.json());
    
    const { data } = useSWR(API_URL, fetcher, { refreshInterval: 10000 });
    
    useEffect(()=>{
        let value = '';
        if(data !== undefined)
            value=data.value;
        
        setJoke(value);
        setTimeToNewJoke(10);
    }, [data])
    

    useEffect(()=>{
        setTimeout(()=>{
            if(timeToNewJoke >= 1) setTimeToNewJoke(timeToNewJoke - 1);
        }, 1000)

    }, [joke, timeToNewJoke])
    
    return ( 
        <div className='Random'>
            {joke} <br/>
            New joke for: {timeToNewJoke}s
        </div> 
    );
}
 
export default Random;