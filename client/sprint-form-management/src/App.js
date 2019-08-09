import React from 'react';
import './App.css';
import UserRegister from './Components/UserRegistration';
import UserCard from './Components/UserCard';

function App() {
	return (
		<div className="App">
			<UserRegister />
			<UserCard />
		</div>
	);
}

export default App;
