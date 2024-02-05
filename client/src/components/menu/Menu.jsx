import Icon from '../icon/Icon';
import { StyledMenu, StyledMenuItem, StyledNav, StyledNavLink } from './styles';

const Menu = () => {
	return (
		<>
			<StyledNav>
				<Icon src='/assets/icons/icon-menu.svg' alt='icon menu' />
				<StyledMenu>
					<StyledMenuItem>
						<StyledNavLink to='/'>
							<Icon src='/assets/icons/icon-home.svg' alt='icon home' />
						</StyledNavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<StyledNavLink to='/users'>
							<Icon src='/assets/icons/icon-users.svg' alt='icon users' />
						</StyledNavLink>
					</StyledMenuItem>
				</StyledMenu>
			</StyledNav>
		</>
	);
};

export default Menu;
