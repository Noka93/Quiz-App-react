import React from "react";
import { Icon } from "@iconify/react";
import "./Settings.css";
import home_tests from "../../assets/images/home_tests.png";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
	const navigate = useNavigate();
	return (
		<div className="settings-page">
			<div className="settings-icon">
				<Icon
					icon="basil:arrow-left-solid"
					width="40"
					height="40"
					color="#e68033"
					style={{ color: "grey" }}
					onClick={() => navigate("/dashboard")}
				/>
				<h1>Settings</h1>
			</div>
			<div className="images">
				<img src={home_tests} alt="" />
			</div>
			<div className="settings-privacy">
				<div className="privacy-left">
					<h2>Privacy</h2>
					<Link
						className="changepswd"
						to={navigate("/changepassword")}
					>
						<Icon icon="mdi:password" className="setting-cpsw" />
						Change password
					</Link>
				</div>
				<div className="privacy-left">
					<h2>On/Off</h2>
					<Link className="notification">
						<Icon
							icon="iconamoon:notification-fill"
							width="15"
							height="15"
							className="setting-notification"
						/>
						Notifications
					</Link>
					<Link className="sound">
						<Icon
							icon="akar-icons:sound-on"
							width="15"
							height="15"
							className="setting-sound"
						/>
						Sounds
					</Link>
				</div>
				<div className="privacy-left">
					<h2>Help!!!</h2>
					<Link className="rules">
						<Icon
							icon="carbon:deploy-rules"
							width="15"
							height="15"
							className="setting-notification"
						/>
						Rules to play the quiz
					</Link>
					<Link className="rules">
						<Icon
							icon="ri:question-fill"
							width="15"
							height="15"
							className="setting-rules"
						/>
						How to play the quiz?
					</Link>
				</div>
				<div className="privacy-left">
					<h2>Others</h2>
					<Link className="policy">
						<Icon
							icon="icon-park-outline:personal-privacy"
							width="15"
							height="15"
							className="setting-policy"
						/>
						Privacy policy
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Settings;
