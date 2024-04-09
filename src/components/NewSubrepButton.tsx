import { View } from '../types/types';

interface SBProps {
  setView: (view: View) => void;
}

export const NewSubrepButton: React.FC<SBProps> = ({ setView }) => {
  return (
    <>
      <button onClick={() => setView('addingSubrepertoire')}></button>
    </>
  );
};
