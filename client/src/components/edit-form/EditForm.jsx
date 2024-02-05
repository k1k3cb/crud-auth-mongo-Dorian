import { URLS } from '../../constants/urls';
import { updateData } from '../../utils/api/users.api';

const EditForm = ({ user, setUser, hideForm }) => {
	const { name, active, image } = user;
	return (
		<form onSubmit={ev => handleSubmit(ev, user, setUser, hideForm)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					value={name}
					onInput={ev => setUser({ ...user, name: ev.target.value })}
				/>
			</div>
			<div>
				{image && (
					<>
						<img src={user.image} alt='' />
						<button
							type='button'
							onClick={() => changeImage(image, user, setUser)}
						>
							Change Image
						</button>
						<button
							type='button'
							onClick={() => changeGender(image, user, setUser)}
						>
							Change Gender
						</button>
						<button
							type='button'
							onClick={() => setUser({ ...user, image: '' })}
						>
							Delete Image
						</button>
					</>
				)}

				{!image && (
					<button type='button' onClick={() => createImage(user, setUser)}>
						Create Image
					</button>
				)}
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					type='checkbox'
					checked={active}
					onChange={ev => setUser({ ...user, active: ev.target.checked })}
				/>
			</div>
			<button>Save User</button>
		</form>
	);
};

const handleSubmit = async (ev, user, setUser, hideForm) => {
	ev.preventDefault();
	const { _id } = user;
	const userUpdated = await updateData(`${URLS.API_USERS}/${_id}`, user);
	setUser(userUpdated);
	hideForm();
};

const changeGender = (image, user, setUser) => {
	const isMan = image.includes('/men/');
	if (isMan) image = image.replace('/men/', '/women/');
	else image = image.replace('/women/', '/men/');
	setUser({ ...user, image });
};

const changeImage = (image, userData, setUserData) => {
	if (!image) return;
	const randomNumber = Math.floor(Math.random() * 100);
	const newImage = image.replace(/\d+\.jpg$/, `${randomNumber}.jpg`);
	setUserData({ ...userData, image: newImage });
};

const createImage = (user, setUser) => {
	const randomNumber = Math.floor(Math.random() * 20);
	console.log(randomNumber);
	const gender = randomNumber <= 10 ? 'men' : 'women';
	const newImage = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
	setUser({ ...user, image: newImage });
};

export default EditForm;
