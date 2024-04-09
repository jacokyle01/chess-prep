import { useState } from "react";

interface SFProps {
	addSubrepertoire: (pgn: string) => void;
}
export const NewSubrepForm: React.FC<SFProps> = ({ addSubrepertoire }) => {
	const [textareaContent, setTextareaContent] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextareaContent(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addSubrepertoire(textareaContent);
		setTextareaContent("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				value={textareaContent}
				onChange={handleChange}
				placeholder="Enter your subrepertoire here..."
				rows={5}
				cols={40}
			/>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};
