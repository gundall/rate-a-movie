import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Movies from './search/Movies';
import MyList from './myList/MyList';
import GlobalFonts from './assets/fonts/fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<GlobalFonts />
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<App />}>
					<Route path="*" element={<Movies />} />
					<Route path="search" element={<Movies />} />
					<Route path="myList" element={<MyList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
);