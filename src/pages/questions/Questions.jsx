import React, { useEffect, useState } from "react";
import "./Questions.css";
import axios from "axios";

// const sampleData = [
// 	{
// 		id: 9,
// 		answer: "The '==' compares the references of objects, while equal() compares their contents or values.",
// 	},
// 	{
// 		id: 10,
// 		answer: "Yes.",
// 	},
// 	{
// 		id: 4,
// 		answer: "Java uses Just In Time compiler to enable high performance. It is used to convert the instructions into bytecodes.",
// 	},
// 	{
// 		id: 13,
// 		answer: "No",
// 	},
// 	{
// 		id: 12,
// 		answer: "Yes",
// 	},
// 	{
// 		id: 6,
// 		answer: "Inheritance, Encapsulation, Polymorphism, Abstraction.",
// 	},
// 	{
// 		id: 5,
// 		answer: "An instance of a class is called an object. The object has state and behavior.",
// 	},
// 	{
// 		id: 14,
// 		answer: "Yes",
// 	},
// 	{
// 		id: 3,
// 		answer: "OOP concepts, Platform independent, High Performance, Multi-threaded",
// 	},
// 	{
// 		id: 11,
// 		answer: "JDK stands for Java Development Kit. It is a set of software tools that allows developers to create and run Java applications.",
// 	},
// 	{
// 		id: 2,
// 		answer: "Java is a high-level programming language and is platform-independent.",
// 	},
// 	{
// 		id: 7,
// 		answer: "Java is called platform independent because of its byte codes which can run on any system irrespective of its underlying operating system.",
// 	},
// 	{
// 		id: 8,
// 		answer: "Wrapper classes convert the Java primitives into the reference types (objects).",
// 	},
// ];

function Questions() {
	const [questionNo, setQuestionNo] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [noOfQus, setNoOfQus] = useState(0);
	const API_URL = "http://localhost:8080/api/v1/getQuestions";

	const getQuestions = async () => {
		try {
			const response = await axios.get(API_URL);
			setQuestions(response.data);
			setNoOfQus(response.data.length);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getQuestions();
	}, []);

	const handleNext = () => {
		if (questionNo < noOfQus - 1) {
			setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
		} else {
			setQuestionNo(0);
		}
		if (selectedOption !== null) {
			setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
			setSelectedOption(null);
		} else {
			alert(
				"Please select an option before moving to the next question."
			);
		}
	};

	console.log(questions);
	console.log(questions[questionNo]);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="qustn-page">
			<div>
				{questions.length === 0 ? (
					<p>Loading...</p>
				) : questionNo < questions.length ? (
					<>
						<div className="question">
							<h2>Question</h2>
							<p>{questions[questionNo].questionTitle}</p>
							<hr />
						</div>
						<div className="options">
							<label>
								<input
									type="radio"
									name="option"
									value={questions[questionNo].option1}
									checked={
										selectedOption ===
										questions[questionNo].option1
									}
									onChange={handleOptionChange}
								/>
								{questions[questionNo].option1}
							</label>

							<label>
								<input
									type="radio"
									name="option"
									value={questions[questionNo].option2}
									checked={
										selectedOption ===
										questions[questionNo].option2
									}
									onChange={handleOptionChange}
								/>
								{questions[questionNo].option2}
							</label>

							<label>
								<input
									type="radio"
									name="option"
									value={questions[questionNo].option3}
									checked={
										selectedOption ===
										questions[questionNo].option3
									}
									onChange={handleOptionChange}
								/>
								{questions[questionNo].option3}
							</label>

							<label>
								<input
									type="radio"
									name="option"
									value={questions[questionNo].option4}
									checked={
										selectedOption ===
										questions[questionNo].option4
									}
									onChange={handleOptionChange}
								/>
								{questions[questionNo].option4}
							</label>
						</div>
					</>
				) : (
					<p>No questions available.</p>
				)}
			</div>
			<button
				type="button"
				className="question-btn"
				onClick={handleNext}
			>
				NEXT
			</button>
		</div>
	);
}

export default Questions;
