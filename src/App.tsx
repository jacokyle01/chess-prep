// import { useState } from 'react'
import { Config } from 'chessground/config';
import { useRef, useState } from 'react';
import { Api } from 'chessground/api';
import Chessground, { Key } from './components/Chessground';
import { Next } from './components/Next';
import { Form } from './components/Form';
import { ChessSrs } from 'chess-srs';
import { Chess } from 'chess.js';
import { TrainingData } from 'chess-srs/dist/types';
import { RepertoireTree } from './components/RepertoireTree';
import { View } from './types/types';
import { NewSubrepButton } from './components/NewSubrepButton';
import { NewSubrepForm } from './components/NewSubrepForm';

const App = () => {
  //TODO store as state? ex. in hook?
  const chess = new Chess();
  const chessSrs = ChessSrs();

  //render conditionally on action of user
  const [view, setView] = useState<View>('train');

  //store repertoire names here
  const [subrepNames, setSubrepNames] = useState<string[]>([]);

  const myConfig: Config = {};
  const apiRef = useRef<Api | undefined>();

  const initializeTraining = (userInput: string) => {
    chessSrs.setMethod('learn');
    chessSrs.addSubrepertoires(userInput, 'white');
    chessSrs.load(0);
  };

  const learnNext = () => {
    chess.reset();
    chessSrs.next();
    chessSrs.path()?.forEach((ply) => playPly(ply.data));
  };

  const playPly = (data: TrainingData) => {
    const metadeta = chess.move(data.san);
    apiRef.current!.move(metadeta.from as Key, metadeta.to as Key);
  };

  const addSubrepertoire = (pgn: string, name: string) => {
    console.log(pgn);
    console.log(name);
    setSubrepNames([...subrepNames, name]);
    setView('train');
  };

	const selectSubrepertoire = (index: number) => {
		console.log(`Selected ${index}`);
		chessSrs.load(index);
	}

  return (
    <>
      {view == 'addingSubrepertoire' && <NewSubrepForm addSubrepertoire={addSubrepertoire}/>}
      <div id="repertoire-wrap">
        <RepertoireTree subrepNames={subrepNames} selectSubrepertoire={selectSubrepertoire}></RepertoireTree>
        <NewSubrepButton setView={setView}></NewSubrepButton>
      </div>
      <Chessground width={640} height={640} config={myConfig} ref={apiRef} />
      <div id="training-wrap">
        <Next learnNext={learnNext}></Next>
        <Form initializeTraining={initializeTraining}></Form>
        <h3>1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2</h3>
      </div>
    </>
  );
};

export default App;
