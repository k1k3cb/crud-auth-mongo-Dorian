import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { createData } from '../../utils/api/users.api';

const CreateForm = () => {
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		active: false
	});

	const navigate = useNavigate();
	return (
		<form onSubmit={ev => handleSubmit(ev, user, navigate)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					value={user.name}
					onInput={ev => setUser({ ...user, name: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					value={user.username}
					onInput={ev => setUser({ ...user, username: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					value={user.email}
					onInput={ev => setUser({ ...user, email: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					value={user.password}
					onInput={ev => setUser({ ...user, password: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					type='checkbox'
					checked={user.active}
					onChange={ev => setUser({ ...user, active: ev.target.checked })}
				/>
			</div>
			<button>Create User</button>
		</form>
	);
};

const handleSubmit = async (ev, user, navigate) => {
	ev.preventDefault();
	await createData(URLS.API_USERS, user);
	navigate('/users');
};

export default CreateForm;
