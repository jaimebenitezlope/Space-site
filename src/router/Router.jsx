import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/' />
		</Routes>
	);
};

export default Router;
