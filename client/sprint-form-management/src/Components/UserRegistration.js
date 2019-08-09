import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserRegister = ({}) => {
	return (
		<div className="user-form">
			<h1 className="user-form-h1">Register</h1>
			<Form>
				{/* {touched.username && errors.username && <p className="error">{errors.username}</p>} */}
				<Field className="form-input" type="text" name="username" placeholder="username" />

				{/* {touched.password && errors.password && <p className="error">{errors.password}</p>} */}
				<Field className="form-input" type="password" name="password" placeholder="password" />

				<button type="submit">Submit</button>
			</Form>
		</div>
	);
};

const FormikUserRegister = withFormik({
	mapPropsToValues({ username, password }) {
		return {
			username: username || '',
			password: password || ''
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required(),
		password: Yup.string().required()
	}),

	handleSubmit(values) {
		axios
			.post('http://localhost:5000/api/register', values)
			.then((res) => console.log(res))
			.catch((err) => console.log(err.response));
	}
})(UserRegister);
export default FormikUserRegister;
