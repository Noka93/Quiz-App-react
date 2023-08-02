import React from "react";
import "./changepassword.css";
import { Icon } from "@iconify/react";

const Changepassword = () => {
	return (
		<div className="changepassword">
			<div className="cpswd">
				<Icon
					icon="mdi:key-outline"
					width="120"
					height="120"
					className="cpswd-icon"
				/>
				<form action="/">
					<Icon icon="mdi:password" className="old-password-icon" />
					<input
						type="password"
						name="password"
						placeholder="Old Password"
					/>
					<Icon icon="mdi:password" className="new-password-icon" />
					<input
						type="password"
						name="newpassword"
						placeholder="New Password"
					/>
					<Icon
						icon="mdi:password"
						className="confirmpassword-icon"
					/>
					<input
						type="password"
						name="confirmpassword"
						placeholder="Confirm Password"
					/>

					<button type="submit" className="change-password">
						CHANGE PASSWORD
					</button>
				</form>
			</div>
		</div>
	);
};

export default Changepassword;
