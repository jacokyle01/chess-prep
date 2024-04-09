import { useState } from 'react';

interface SFProps {
  addSubrepertoire: (pgn: string, name: string) => void;
}
export const NewSubrepForm: React.FC<SFProps> = ({ addSubrepertoire }) => {
  const [textareaContent, setTextareaContent] = useState('');
	const [textInputContent, setTextInputContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSubrepertoire(textareaContent, textInputContent);
    setTextareaContent('');
  };

	const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTextInputContent(event.target.value);
	}

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={textareaContent}
        onChange={handleChange}
        placeholder="Enter your subrepertoire here..."
        rows={5}
        cols={40}
      />
      <input
        type="text"
        value={textInputContent}
        onChange={handleTextInputChange}
        placeholder="Enter additional information..."
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
