import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	async componentDidMount() {
		const url = 'http://localhost:5000/api/restricted/data';
		let response = await axios.get(url);
		let data = response.data;
		this.setState({
			name: data.name,
			course: data.course,
			technique: data.technique,
			ingredients: [ data.ingredients ]
		});
		console.log(data);
	}

	render() {
		return <div />;
	}
}

export default UserCard;
