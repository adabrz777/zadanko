import React, { useState, useEffect } from 'react';
import Categories from './categories.js';

const SelectJoke = () => {
    const myRef = React.createRef();

	const JOKE_URL = 'https://api.chucknorris.io/jokes/random?category=';

	const [ selectedCategory, setSelectedCategory ] = useState('animal');
	const [ joke, setJoke ] = useState('');


	useEffect(
		() => {
            fetch(`${JOKE_URL}${selectedCategory}`)
            .then(r => r.json())
            .then(r => r.value)
            .then((r) => setJoke(r))
		},
		[ selectedCategory ]
	);

    //TODO: use Ant Design
    
	return (
        <div>
            {joke}<br/>
            <select onChange={()=>{setSelectedCategory(myRef.current.value)}} ref={myRef}>
                <Categories />
            </select>
        </div>
    );
};

export default SelectJoke;
