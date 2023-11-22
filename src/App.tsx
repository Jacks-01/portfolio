import { FC } from 'react';
import './App.css';

interface Props {}

const App: FC<Props> = ({}) => {
	return (
		<>
			<p className='name'>
				<span className='codeSymbols'>&lt;/</span>
				Jack <br /> Stubblefield
				<span className='codeSymbols'>/&gt;</span>
			</p>
		</>
	);
};

export default App;
