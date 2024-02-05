import { Outlet } from 'react-router-dom';

import Main from '../components/main/Main';
import Menu from '../components/menu/Menu';
import { StyledLayout } from './styles';

const Layout = () => {
	return (
		<StyledLayout>
			<Menu />
			<Main>
				<Outlet />
			</Main>
		</StyledLayout>
	);
};

export default Layout;
