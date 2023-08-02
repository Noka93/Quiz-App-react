import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Icon } from "@iconify/react";
import "../../pages/forgotpassword/Forgotpassword.css";

function Forgotpassword() {
	const navigate = useNavigate();
	const initialValues = {
		email: "",
	};

	const handleSubmit = async (values) => {
		try {
			const response = await axios.put(
				"http://localhost:8080/api/v1/forgot-password",
				{
					email: values.email,
				}
			);

			if (response.data.success) {
				alert("OTP sent successfully!");
				navigate("/verifyotp");
			} else {
				console.error("Failed to send OTP.");
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
	};

	return (
		<div className="forgotpswd">
			<div className="forgotpassword">
				<h1>LET'S RECREATE YOUR PASSWORD!</h1>
				<p>
					Please provide your register email id in the box below. We
					will send an OTP to your entered email address. You need to
					enter a received OTP in the next screen
				</p>
				<div className="form-page">
					<Formik
						initialValues={initialValues}
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

							<button type="submit" className="submit-btn">
								SEND OTP
							</button>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default Forgotpassword;
