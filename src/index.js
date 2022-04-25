import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Styles
import './index.css';

// View Components
import Home from './pages/Home';
import PageNotFound from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/task/:section' element={<Home />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
