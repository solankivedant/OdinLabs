import Editor from "@monaco-editor/react";
import { useState } from "react";

type CodeEditorWindowProps = {
	onChange: (key: string, value: string) => void;
	language: string;
	code: string;
	theme: string;
	readOnly: boolean; // Add this prop
};

const CodeEditorWindow = ({
	onChange,
	language,
	code,
	theme,
	readOnly,
}: CodeEditorWindowProps) => {
	const [value, setValue] = useState(code || "");

	const handleEditorChange = (value: string | undefined) => {
		if (value === undefined) return;
		setValue(value);
		onChange("code", value);
	};

	return (
		<div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
			<Editor
				height="65vh"
				width={`100%`}
				language={language || "C++"}
				value={value}
				theme={theme}
				onChange={handleEditorChange}
				options={{
					fontSize: 18,
					readOnly: readOnly, // Set readOnly option
				}}
			/>
		</div>
	);
};

export default CodeEditorWindow;
