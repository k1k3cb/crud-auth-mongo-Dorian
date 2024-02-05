import { useNavigate } from 'react-router-dom';

const AddUser = () => {
	const navigate = useNavigate();
	return <button onClick={() => navigate('/create-user')}>ADD USER</button>;
};

export default AddUser;
