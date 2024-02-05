import { StyledDefaultImage } from './styles';

const DefaultImage = ({ name, color }) => {
	const userLetter = formatLetter(name);
	return <StyledDefaultImage $color={color}>{userLetter}</StyledDefaultImage>;
};

const formatLetter = name => name[0].toUpperCase();

export default DefaultImage;
