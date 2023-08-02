import React from "react";
import { Icon } from "@iconify/react";
import "../../pages/result/Result.css";
import { useNavigate } from "react-router-dom";

function Results() {
	const navigate = useNavigate();
	return (
		<div className="result-page">
			<div className="result-nav">
				<Icon
					icon="basil:arrow-left-solid"
					width="40"
					height="40"
					color="#e68033"
					style={{ color: "grey" }}
					onClick={() => navigate("/dashboard")}
				/>
				<h1>Result</h1>
			</div>

			<div className="result-score">
				<p>Congratulations!</p>
				<h2>Your Score is : </h2>
			</div>
		</div>
	);
}

export default Results;
