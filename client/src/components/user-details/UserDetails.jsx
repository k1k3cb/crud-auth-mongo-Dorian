import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/api/auth.api';
import { deleteData, getData } from '../../utils/api/users.api';
import EditForm from '../edit-form/EditForm';
import {
	StyledButtonOption,
	StyledButtonsOptions,
	StyledDefaultDetailsImage,
	StyledStatusSpan,
	StyledUserDetails,
	StyledUserDetailsContainer,
	StyledUserDetailsImage
} from './styles';

const UserDetails = () => {
	const { userData, setUserData } = useContext(AuthContext);
	const { id } = useParams();
	const [user, setUser] = useState();
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		getUser(id, setUser);
	}, []);

	const navigate = useNavigate();

	if (!user) return <h1>Loading User...</h1>;

	const { _id, image, active, name, color, username, createdAt, updatedAt } =
		user;

	const userLetter = formatLetter(name);
	const createdDate = formatCreatedDate(createdAt);
	const updatedDate = formatUpdatedDate(createdAt, updatedAt);

	return (
		<StyledUserDetailsContainer>
			<StyledUserDetails>
				{image ? (
					<StyledUserDetailsImage src={image} alt='' $active={active} />
				) : (
					<StyledDefaultDetailsImage name={name} $color={color}>
						{userLetter}
					</StyledDefaultDetailsImage>
				)}
				<div>
					<h2>{name}</h2>
					<p>@{username}</p>
					<p>Member since: {createdDate}</p>
					<p>Last updated: {updatedDate}</p>
					<StyledStatusSpan $active={active}>
						{active ? 'Active' : 'Inactive'}
					</StyledStatusSpan>
				</div>
				{userData?.id === _id && (
					<StyledButtonsOptions>
						<StyledButtonOption
							$color={'green'}
							onClick={() => setIsEditing(true)}
						>
							Edit
						</StyledButtonOption>
						<StyledButtonOption
							$color={'crimson'}
							onClick={() => deleteUser(_id, navigate, setUserData)}
						>
							Delete
						</StyledButtonOption>
					</StyledButtonsOptions>
				)}
			</StyledUserDetails>
			{isEditing && (
				<EditForm
					user={user}
					setUser={setUser}
					hideForm={() => setIsEditing(false)}
				/>
			)}
		</StyledUserDetailsContainer>
	);
};

const formatLetter = name => name[0].toUpperCase();

const formatCreatedDate = date => new Date(date).toLocaleDateString();

const formatUpdatedDate = (createDate, updatedDate) => {
	const formatedUpdatedDate = new Date(updatedDate).toLocaleDateString();
	if (createDate === updatedDate) return 'Never';
	return formatedUpdatedDate;
};

const getUser = async (id, setUser) => {
	const userData = await getData(`${URLS.API_USERS}/${id}`);
	setUser(userData);
};

const deleteUser = async (id, navigate, setUserData) => {
	await deleteData(`${URLS.API_USERS}/${id}`);
	logoutUser(setUserData, navigate);
};

export default UserDetails;
