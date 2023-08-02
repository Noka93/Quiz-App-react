import React, { useState } from "react";
import "./dashboard.css";
import { Icon } from "@iconify/react";
import quizz from "../../assets/images/quizz.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
	const navigate = useNavigate();
	const [showBar, setShowBar] = useState(false);
	return (
		<div className="dashboard-page">
			{showBar === true && (
				<Sidebar setShowBar={setShowBar} showBar={showBar} />
			)}

			<div className="container">
				<div className="dash-nav">
					<button
						className="btn-icon"
						onClick={() => setShowBar(!showBar)}
					>
						<Icon
							icon="iconamoon:menu-burger-horizontal"
							width="40"
							height="40"
						/>
					</button>
					<h1>Noka's Quiz</h1>
					<button
						type="submit"
						className="logout"
						onClick={() => navigate("/")}
					>
						<Icon
							icon="material-symbols:logout"
							width="20"
							height="15"
						/>
						Logout
					</button>
				</div>
				<div className="start-quiz">
					<img src={quizz} alt="" />
				</div>

				<div className="practice">
					<h2 className="practice-quiz">Practice Quiz</h2>
					<div className="courses">
						<div className="course-style">
							<h2>Java</h2>
							<Icon
								icon="la:java"
								width="50"
								height="50"
								className="practice-icon"
							/>
							<button
								type="submit"
								onClick={() => navigate("/question")}
							>
								PLAY
								<Icon
									icon="solar:arrow-right-linear"
									width="40"
									height="15"
								/>
							</button>
						</div>
						<div className="course-style">
							<h2>Python</h2>
							<Icon
								icon="bxl:python"
								width="100"
								height="100"
								className="practice-icon"
							/>
							<button type="submit">
								PLAY
								<Icon
									icon="solar:arrow-right-linear"
									width="40"
									height="15"
								/>
							</button>
						</div>
						<div className="course-style">
							<h2>React</h2>
							<Icon
								icon="mdi:react"
								width="100"
								height="100"
								className="practice-icon"
							/>
							<button type="submit">
								PLAY
								<Icon
									icon="solar:arrow-right-linear"
									width="40"
									height="15"
								/>
							</button>
						</div>
						<div className="course-style">
							<h2>Go</h2>
							<Icon
								icon="simple-icons:go"
								width="100"
								height="100"
								className="practice-icon"
							/>
							<button type="submit">
								PLAY
								<Icon
									icon="solar:arrow-right-linear"
									width="40"
									height="15"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
