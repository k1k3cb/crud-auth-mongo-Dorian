import { useNavigate } from 'react-router-dom';
import DefaultImage from '../default-image/DefaultImage';
import {
	StyledImageContainer,
	StyledUser,
	StyledUserDetails,
	StyledUserImage,
	StyledUsername
} from './styles';

const User = ({ ...user }) => {
	const { _id, name, image, username, active, color } = user;

	const navigate = useNavigate();
	return (
		<StyledUser>
			<StyledImageContainer>
				{image ? (
					<StyledUserImage src={image} alt='' $active={active} />
				) : (
					<DefaultImage name={name} color={color} />
				)}
			</StyledImageContainer>
			<StyledUsername>@{username}</StyledUsername>
			<StyledUserDetails onClick={() => navigate(`/user-details/${_id}`)}>
				Details
			</StyledUserDetails>
		</StyledUser>
	);
};

export default User;
