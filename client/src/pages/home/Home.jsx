import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/login-form/LoginForm';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/api/auth.api';

const Home = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div>
			<h1>Welcome to BEST users managment</h1>
			{loading && <h2>Loading user...</h2>}
			{!userData && <LoginForm />}
			{userData && (
				<div>
					<h2>Welcome {userData.name}</h2>
					<button onClick={() => logoutUser(setUserData, navigate)}>
						Log Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Home;
