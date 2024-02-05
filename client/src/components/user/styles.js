import styled from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImageContainer = styled.div`
	margin-bottom: 1rem;
`;
const StyledUserImage = styled.img`
	width: 150px;
	margin-bottom: 1rem;
	border-radius: 50%;
	filter: grayscale(${({ $active }) => ($active ? 0 : 1)});
`;
const StyledUsername = styled.span`
	display: block;
	margin-bottom: 1rem;
`;
const StyledUserDetails = styled.button``;

export {
	StyledImageContainer,
	StyledUser,
	StyledUserDetails,
	StyledUserImage,
	StyledUsername
};
