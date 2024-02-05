import styled from 'styled-components';

const StyledDefaultImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	background-color: ${({ $color }) => $color};
	border-radius: 50%;
	font-size: 3.5rem;
	color: aliceblue;
`;

export { StyledDefaultImage };
