interface Props {
  learnNext: () => void;
}

export const Next = ({ learnNext }: Props) => {
  return <button id="next" onClick={learnNext}></button>;
};

// export default Next;
