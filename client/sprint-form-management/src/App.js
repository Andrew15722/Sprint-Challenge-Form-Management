import React, { useEffect, useState } from 'react';
import './App.css';
import UserRegister from './Components/UserRegistration';
import UserCard from './Components/UserCard';

import axios from 'axios';

import { Card } from 'semantic-ui-react';

function App() {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/restricted/data')
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err.response));
	}, []);

	return (
		<div className="App">
			<Card.Group itemsPerRow={4}>
				{data.map((food) => {
					return <UserCard {...food} />;
				})}
			</Card.Group>
			<UserRegister />
		</div>
	);
}

export default App;
