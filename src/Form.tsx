interface FormProps {
	initializeTraining: () => void;
}

export const Form: React.FC<FormProps> = ({ initializeTraining }) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		initializeTraining();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" />
			<button>Submit</button>
		</form>
	);
};
