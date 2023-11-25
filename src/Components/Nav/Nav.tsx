import { FC } from 'react';
import './Nav.css';

interface Props {}

const Nav: FC<Props> = ({}) => {
	return (
		<>
			<div className='navContainer'>
				<a className='navLink' href='#about'>
					<p>
						<span>/</span>about
					</p>
				</a>
				<a className='navLink' href='#experience'>
					<p>
						<span>/</span>experience
					</p>
				</a>
				<a className='navLink' href='#projects'>
					<p>
						<span>/</span>projects
					</p>
				</a>
				<a className='navLink' href='#resume'>
					<p>
						<span>/</span>resume
					</p>
				</a>
			</div>
		</>
	);
};

export default Nav;
