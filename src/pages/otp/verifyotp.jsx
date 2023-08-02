import React, { useState } from "react";
import "./verifyotp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Verifyotp = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState("");

	const handleOtpConfirmation = () => {
		const data = {
			otp: otp,
		};
		axios
			.put("http://localhost:8080/api/v1/verify-account", data)
			.then((response) => {
				console.log("Response:", response.data);
				navigate("/dashboard");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="verify-otp">
			<div className="otp-page">
				<h1>VERIFY OTP</h1>

				<div className="otp">
					<h2>OTP SENT!</h2>
					<p>
						Great! We have sent an OTP to your email address. Please
						enter it in below box
					</p>
					<div className="btn-otp">
						<input
							className="btn-otp-input"
							placeholder="* * * * * *"
							value={otp}
							onChange={(e) => setOtp(e.target.value)} 
						/>
						<button type="submit" onClick={handleOtpConfirmation}>
							CONFIRM OTP
						</button>
					</div>
					<p>
						<a href="/">Resend OTP</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Verifyotp;
