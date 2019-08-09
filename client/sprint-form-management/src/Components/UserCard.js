import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.setState = '';
	}

	render() {
		const extra = this.props.ingredients.map((item) => {
			return <li>{item}</li>;
		});
		return (
			<Card
				image="https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
				header={this.props.name}
				meta={this.props.course}
				description={this.props.technique}
				extra={('Ingredients', extra)}
			/>
		);
	}
}

export default UserCard;
