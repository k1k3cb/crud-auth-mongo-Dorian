import styled from 'styled-components';

const StyledUserDetailsContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const StyledUserDetails = styled.div`
	position: relative;
	display: flex;
	align-items: start;
	width: 500px;
	height: 300px;
	padding: 2rem;
	box-shadow: 0 10px 10px rgb(0 0 0 /0.3);
`;

const StyledUserDetailsImage = styled.img`
	width: 150px;
	margin-bottom: 1rem;
	margin-right: 4rem;
	border-radius: 50%;
	filter: grayscale(${({ $active }) => ($active ? 0 : 1)});
`;

const StyledDefaultDetailsImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	margin-right: 4rem;
	background-color: ${({ $color }) => $color};
	border-radius: 50%;
	font-size: 3.5rem;
	color: aliceblue;
`;

const StyledStatusSpan = styled.span`
	color: ${({ $active }) => ($active ? 'green' : 'crimson')};
`;

const StyledButtonsOptions = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 50%;
	display: flex;
	justify-content: space-between;
	width: 200px;
	transform: translateX(-50%);
`;
const StyledButtonOption = styled.button`
	width: 75px;
	padding: 0.4rem;
	border: none;
	border: 1px solid ${({ $color }) => $color};
	border-radius: 0.6rem;
	background: none;
	cursor: pointer;
`;
export {
	StyledButtonOption,
	StyledButtonsOptions,
	StyledDefaultDetailsImage,
	StyledStatusSpan,
	StyledUserDetails,
	StyledUserDetailsContainer,
	StyledUserDetailsImage
};
