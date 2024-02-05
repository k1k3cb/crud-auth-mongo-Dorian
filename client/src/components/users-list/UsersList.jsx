import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getAllData } from '../../utils/api/users.api';
import AddUser from '../add-user/AddUser';
import User from '../user/User';
import { StyledUsersList } from './styles';

// const UsersContext = createContext()

// const UsersProvider = () =>{
// 	const [users, setUsers] = useState([]);
// 	<UsersContext.Provider value={{users, setUsers}}>

// 	</UsersContext.Provider>
// }

const UsersList = () => {
	const { userData } = useContext(AuthContext);
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState(0);

	const filteredUsers = filterUsersByActive(users, filter);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	if (users.length === 0) return <h1>Loading Users...</h1>;

	return (
		<>
			<AddUser />
			<StyledUsersList>
				{filteredUsers.map(user => (
					<User key={user._id} {...user} />
				))}
			</StyledUsersList>
			<button onClick={() => setFilter(0)}>ALL USERS</button>
			<button onClick={() => setFilter(1)}>ACTIVE USERS</button>
			<button onClick={() => setFilter(2)}>INACTIVE USERS</button>
		</>
	);
};

const getAllUsers = async setUsers => {
	const allUsers = await getAllData(URLS.API_USERS);
	setUsers(allUsers);
};

const filterUsersByActive = (users, filter) => {
	const filteredUsers = [...users];
	switch (filter) {
		case 0:
			return filteredUsers;
		case 1:
			return filteredUsers.filter(user => user.active);
		case 2:
			return filteredUsers.filter(user => !user.active);
	}
};

export default UsersList;
