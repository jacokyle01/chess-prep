// import { useState } from 'react'
import { Config } from "chessground/config";
import "./App.css";
import { useRef } from "react";
import { Api } from "chessground/api";
import Chessground from "./Chessground";

const App = () => {
	// const [count, setCount] = useState(0)
	const myConfig: Config = {};
	const apiRef = useRef<Api | undefined>();

	return (
		<Chessground width={640} height={640} config={myConfig} ref={apiRef} />
	);
};

export default App;
