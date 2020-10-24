import React from 'react';
import Random from './component/random/index.js';
import SelectedJoke from './component/selected-joke/index.js';
import Peoples from './component/peoples/index.js';

import 'antd/dist/antd.css';

import './App.css';

function App() {
	return (
		<div className="App">
			<Random />
			<SelectedJoke />
			<Peoples />
		</div>
	);
}

export default App;
