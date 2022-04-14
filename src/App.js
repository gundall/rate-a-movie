import React from 'react';
import './App.css';
import Movies from './search/Movies';

function App() {
	return (
		<div className="App" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
			<Movies />
		</div>
	);
}

export default App;
