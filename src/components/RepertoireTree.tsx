interface RTProps {
	subrepNames: string[]
	selectSubrepertoire: (index: number) => void;
}

export const RepertoireTree: React.FC<RTProps> = ({subrepNames, selectSubrepertoire}) => {
  return (
    <>
			{subrepNames.map((subrep, index) => (
				<div onClick={() => selectSubrepertoire(index)}>name:{subrep}, index:{index}</div>
			))}
    </>
  );
};
