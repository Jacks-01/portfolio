import { FC } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

interface Props {}

const App: FC<Props> = ({}) => {
	return (
		<>
			<div className='headerContainer'>
				<div className='nameContainer'>
					<p className='nameText'>
						<span className='codeSymbols'>&lt;/</span>
						Jack <br /> Stubblefield
						<span className='codeSymbols'>/&gt;</span>
					</p>
				</div>
				<Nav />
      </div>
      
      <About />
      <Experience/>
		</>
	);
};

export default App;
