interface RTProps {
	subrepNames: string[]
}

export const RepertoireTree: React.FC<RTProps> = ({subrepNames}) => {
  return (
    <>
			{subrepNames.map((subrep, index) => (
				<div>name:{subrep}, index:{index}</div>
			))}
    </>
  );
};
