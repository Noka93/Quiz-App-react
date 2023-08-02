import React from "react";
import "../components/Sidebar.css";
import { Icon } from "@iconify/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar({ showBar, setShowBar }) {
	const navigate = useNavigate();
	return (
		<div className="sidebar">
			<div className="close">
				<button onClick={() => setShowBar(!showBar)}>
					<XMarkIcon
						style={{
							height: "60px",
							width: "50px",
							backgroundColor: "#35A29F",
							color: "white",
						}}
					/>
				</button>
			</div>
			<div className="side-links">
				<Link to="/">
					<Icon icon="carbon:home" />
					Home
				</Link>
				<Link to="/">
					<Icon icon="iconamoon:profile-thin" />
					My Profile
				</Link>
				<Link to={navigate("/settings")}>
					<Icon icon="carbon:settings" />
					Settings
				</Link>
				<Link to="/">
					<Icon icon="basil:notification-on-outline" />
					Notification
				</Link>
				<Link to="/">
					<Icon icon="material-symbols:logout" />
					Logout
				</Link>
				<Link to="/">
					<Icon icon="mdi:star-outline" />
					Rate Us
				</Link>
			</div>
		</div>
	);
}

export default Sidebar;
