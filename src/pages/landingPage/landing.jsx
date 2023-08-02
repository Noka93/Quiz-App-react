import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import homescreen_img from "../../assets/images/homescreen_img.png";
import Navbar from "../../components/Navbar";

function LandingPage() {

const navigate = useNavigate()
	return (
		<div className="landing-page">
			<Navbar />
			<div className="home-page">
				<div className="left-page">
					<div className="content">
						<h1>Easy and Initative Online testing</h1>
						<p>
							Noka is a platform that helps software engineers
							practice and A's interview questions
						</p>
						<div className="landing-btn">
							<button type="button" onClick={()=> navigate("/signup")}>Get Started</button>
							<button type="button">Request a demo</button>
						</div>
					</div>
				</div>
				<div className="right-page">
					<img src={homescreen_img} alt="" />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
