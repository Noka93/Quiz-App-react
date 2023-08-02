import React from "react";
import "../login/login.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Enter a valid email")
			.required("Email field must not be blank"),

		password: Yup.string().required("Password field must not be blank"),
	});

	const navigate = useNavigate();

	const initialValues = {
		email: "",
		password: "",
	};

	const handleSubmit = async (values) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/api/v1/login",
				values
			);
			console.log(response.data);
			navigate("/dashboard");
		} catch (error) {
			console.error("Error occurred while logging in:", error);
		}
	};

	return (
		<div className="login-page">
			<div className="login">
				<h1>LOGIN WITH YOUR ACCOUNT</h1>
				<div className="form-page">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<Icon
								icon="ic:baseline-email"
								className="email-icon"
							/>
							<Field
								type="email"
								name="email"
								placeholder="Enter your email"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="error"
							/>
							<Icon
								icon="mdi:password"
								className="password-icon"
							/>
							<Field
								type="password"
								name="password"
								placeholder="Password"
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="error"
							/>

							<button type="submit" className="sign-in">
								LOGIN
							</button>

							<div className="f-password">
								<p>
									Forget password?{" "}
									<a href="/forgotpassword">Click here</a>
								</p>
								<p>
									Create new account ?{" "}
									<a href="/signup">Click Here</a>
								</p>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Login;
