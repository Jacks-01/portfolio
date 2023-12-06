import { FC } from 'react';
import './Nav.css';

interface Props {}

const Nav: FC<Props> = ({}) => {
	return (
		<>
			<div className='navContainer'>
				<a
					className='navLink'
					href='#about'>
					<p>
						<span>/</span>about
					</p>
				</a>
				<a
					className='navLink'
					href='#experience'>
					<p>
						<span>/</span>experience
					</p>
				</a>
				<a
					className='navLink'
					href='#projects'>
					<p>
						<span>/</span>projects
					</p>
				</a>
				<a
					className='navLink'
					href='https://docs.google.com/document/d/13KParEI4purIH_Ja6VvHBP2CUxav1IOesLrPGp09n4U/edit?usp=sharing'
					target='_blank'>
					<p>
						<span>/</span>resume
					</p>
				</a>
			</div>
		</>
	);
};

export default Nav;
