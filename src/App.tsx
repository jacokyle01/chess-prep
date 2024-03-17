// import { useState } from 'react'
import { Config } from "chessground/config";
import "./App.css";
import { useMemo, useRef } from "react";
import { Api } from "chessground/api";
import Chessground, { Key } from "./Chessground";
import { Next } from "./Next";
import { Form } from "./Form";
import { ChessSrs } from "chess-srs";
import { Chess } from "chess.js";
import { TrainingData } from "chess-srs/dist/types";

const App = () => {
	const chess = useMemo(() => new Chess(), []); // <- 1
	const chessSrs = useMemo(() => ChessSrs(), []);

	// const [count, setCount] = useState(0)
	const myConfig: Config = {};
	const apiRef = useRef<Api | undefined>();

	const initializeTraining = (userInput: string) => {
		alert(userInput);
		// const chessSrs = ChessSrs({ buckets: [1, 10, 100] });
		chessSrs.setMethod("learn");
		chessSrs.addSubrepertoires(userInput, "white");
		chessSrs.load(0);
	};

	const learnNext = () => {
		chess.reset();
		chessSrs.next();
		chessSrs.path()?.forEach((ply) => playPly(ply.data));
	};

	const playPly = (data: TrainingData) => {
		console.log(chess.ascii());
		const metadeta = chess.move(data.san);
		console.log(metadeta);
		apiRef.current!.move(
			metadeta.from as Key,
			metadeta.to as Key
		);
	};

	return (
		<>
			<Chessground width={640} height={640} config={myConfig} ref={apiRef} />
			<div id="training-wrap">
				<Next learnNext={learnNext}></Next>
				<Form initializeTraining={initializeTraining}></Form>
				<h3>
					1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2
				</h3>
			</div>
		</>
	);
};

export default App;
