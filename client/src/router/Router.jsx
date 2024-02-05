import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';
import CreateUser from '../pages/create-user/CreateUser';
import Home from '../pages/home/Home';
import UserDetailsPage from '../pages/user-details/UserDetailsPage';
import Users from '../pages/users/Users';
import ProtectedRoute from './ProtectedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/user-details/:id' element={<UserDetailsPage />} />
				<Route path='/create-user' element={<CreateUser />} />
			</Route>
			<Route element={<ProtectedRoute />}>{/* Ruta protegida */}</Route>
		</Routes>
	);
};

export default Router;
