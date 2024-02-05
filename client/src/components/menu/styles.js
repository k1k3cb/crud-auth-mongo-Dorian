import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	box-shadow: 10px 0 5rem rgb(0 0 0 / 0.15);
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding-top: 2rem;
`;

const StyledMenuItem = styled.li`
	margin-bottom: 2rem;
`;

const StyledNavLink = styled(NavLink)`
	display: block;
	color: forestgreen;
	&.active {
		filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(100);
	}
`;

export { StyledMenu, StyledMenuItem, StyledNav, StyledNavLink };
