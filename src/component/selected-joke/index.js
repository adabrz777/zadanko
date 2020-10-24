import React, { useState, useEffect } from 'react';
import Categories from './categories.js';

import { Button } from 'antd';

import './index.css';

const SelectedJoke = () => {
	const myRef = React.createRef();

	const JOKE_URL = 'https://api.chucknorris.io/jokes/random?category=';

	const [ selectedCategory, setSelectedCategory ] = useState('animal');
	const [ joke, setJoke ] = useState('');
	const [ other, setOther ] = useState(0);

	useEffect(
		() => {
			fetch(`${JOKE_URL}${selectedCategory}`).then((r) => r.json()).then((r) => r.value).then((r) => setJoke(r));
		},
		[ selectedCategory, other ]
	);

	return (
		<div className="SelectedJoke">
			Your joke sir: {joke}
			<br />
			<div className='GUI'>
				Category: <select
					onChange={() => {
						setSelectedCategory(myRef.current.value);
					}}
					ref={myRef}
				>
				<Categories />
				</select>
				<Button
					type="primary"
					onClick={() => {
						setOther(other + 1);
					}}
				>
					OTHER
				</Button>
			</div>
		</div>
	);
};

export default SelectedJoke;
