import { useState } from "react";

interface FormProps {
	initializeTraining: (input: string) => void;
}

export const Form: React.FC<FormProps> = ({ initializeTraining }) => {
	const [userInput, setUserInput] = useState("");

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setUserInput(e.currentTarget.value);
		// alert(e.currentTarget.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		initializeTraining(userInput);
		setUserInput("Successfully entered PGN");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={userInput}
				onChange={handleChange}
				type="text"
				placeholder="Enter PGN..."
			/>
			<button>Submit</button>
		</form>
	);
};
