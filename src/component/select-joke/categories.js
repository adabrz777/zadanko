import React, {useEffect, useState} from 'react';
import useSWR from 'swr';

const Categories = () => {
    const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
    const [categories, setCategories] = useState(null);

    const fetcher = url => fetch(url).then(r => r.json());
    const { data } = useSWR(CATEGORIES_URL, fetcher);
    
    useEffect(()=>{
        let newCategories = null;
        if(data !== undefined)
            newCategories = data.map((i) => <option value={i} key={i}>{i}</option>)
        
        setCategories(newCategories);
    }, [data])


    return ( 
        <React.Fragment>
            {categories}
        </React.Fragment>
     );
}
 
export default Categories;