import React from "react";
import { Icon } from "@iconify/react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.matches(
				/^[A-Z][a-zA-Z]*(\s+[A-Z][a-zA-Z]*){1,}$/,
				"Please enter a valid name with first letters capitalized."
			)
			.required("Name field must not be blank"),

		username: Yup.string().required("Username field must not be blank"),

		email: Yup.string()
			.email("Enter a valid email")
			.required("Email field must not be blank"),

		password: Yup.string()
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Please ensure that your password contains at least 8 characters, including at least one alphabetical character (uppercase or lowercase), one digit, and one special character from the set [@$!%*#?&]."
			)
			.required("Password field must not be blank"),
	});

	const navigate = useNavigate();

	const initialValues = {
		name: "",
		username: "",
		email: "",
		password: "",
	};

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/api/v1/register",
				values
			);
			console.log("Response from the server:", response.data);
			navigate("/verifyotp");
		} catch (error) {
			console.error("Error submitting the form:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="signup-page">
			<div className="signup-form">
				<h2>CREATE NEW ACCOUNT</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<div>
								<div className="signup-input">
									<Icon
										icon="wpf:name"
										className="name-icon"
									/>
									<Field
										type="text"
										name="name"
										placeholder="Enter Full Name"
									/>
								</div>
								<ErrorMessage
									name="name"
									component="div"
									className="error"
								/>
							</div>
							<div>
								<div className="signup-input">
									<Icon
										icon="wpf:name"
										className="username-icon"
									/>
									<Field
										type="text"
										name="username"
										placeholder="Username"
									/>
								</div>
								<ErrorMessage
									name="username"
									component="div"
									className="error"
								/>
							</div>
							<div>
								<div className="signup-input">
									<Icon
										icon="ic:baseline-email"
										className="email-icon"
									/>
									<Field
										type="email"
										name="email"
										placeholder="Enter your email"
									/>
								</div>
								<ErrorMessage
									name="email"
									component="div"
									className="error"
								/>
							</div>
							<div>
								<div className="signup-input">
									<Icon
										icon="mdi:password"
										className="password-icon"
									/>
									<Field
										type="password"
										name="password"
										placeholder="Password"
									/>
								</div>
								<ErrorMessage
									name="password"
									component="div"
									className="error"
								/>
							</div>
							<button
								type="submit"
								className="sign-in"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Signing In..." : "SIGN IN"}
							</button>
							<div className="already-signUp">
								<p>Already Signed-Up ?</p>
								<p>
									Login <a href="/login">Click Here</a>
								</p>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Signup;
