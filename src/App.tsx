import { FC } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';

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
				<a
					className='githubLink'
					href='https://github.com/Jacks-01'
					target='_blank'>
					<i
						className='fa fa-github'
						style={{
							fontSize: '60px',
							marginLeft: '20px'
						}}></i>
				</a>
			</div>

			<About />
			<Experience />
			<Projects />
		</>
	);
};

export default App;
