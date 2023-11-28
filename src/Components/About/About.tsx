import { FC } from 'react';
import './About.css';

interface Props {}

const About: FC<Props> = ({}) => {
	return (
		<>
			<div className='aboutContainer'>
				<p
					id='about'
					className='about'>
					About
				</p>
				<div className='aboutParagraph'>
					<p>
						While I have always had a deep curiosity of computers
						and programming as a hobby, I officially made the career
						swap to software development in early 2021. Previously,
						I was a social worker helping people experiencing
						homelessness, and had goals to become a therapist.
						However, as I worked in the field it became very
						apparent how inaccessible and underutilized technology
						was. I would constantly get frustrated with government
						websites and applications that were supposed to make
						lives easier, but ultimately just put more roadblocks in
						front of people that were already struggling.
					</p>
					<p>
						This led me to want to put my appreciation for
						technology and my desire to improve people's lives
						together. I decided to enroll in a coding bootcamp that
						specialized in full-stack web development.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
