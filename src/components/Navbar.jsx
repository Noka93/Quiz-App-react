import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./reusables.css";
import icons from "../assets/icons/icon.png";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="nav">
			<div className="logo">
				<h1>Noka</h1>
				<img src={icons} alt="" />
			</div>
			<div className="links">
				<Link to="/">Contact Us</Link>
				<Link to="/">Help Center</Link>
				<div className="nav-btn">
					<button type="button" onClick={() => navigate("/login")}>
						Login
					</button>
					<button type="button" onClick={() => navigate("/signup")}>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
