import React, {useState, useEffect} from 'react';
import useSWR from 'swr';

const Random = () => {
    const [joke, setJoke] = useState('');

    const API_URL = 'https://api.chucknorris.io/jokes/random';

    const fetcher = url => fetch(url).then(r => r.json());
    
    const { data } = useSWR(API_URL, fetcher, { refreshInterval: 10000 });
    
    useEffect(()=>{
        let value = '';
        if(data !== undefined)
            value=data.value;
        
        setJoke(value);
    }, [data])
    

    return ( 
        <div>
            {joke}
        </div> 
    );
}
 
export default Random;