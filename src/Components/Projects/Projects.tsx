import { FC } from 'react';
import './Projects.css';

interface Props {}

const Projects: FC<Props> = ({}) => {
	return (
		<>
			<div className='spacerBlue squiggle'></div>
			<div className='projectsContainer'>
				<p
					id='projects'
					className='projects'>
					Projects
				</p>
				<div className='projectsParagraph'>
					<section className='project'>
						<h3>
							<a
								className='projectLink'
								href='https://wenjobs-3dbc9.firebaseapp.com/'
								target='_blank'>
								Wenjobs
							</a>
						</h3>
						<a
							className='projectLink'
							href='https://github.com/orgs/Wen-Jobs/repositories'
							target='_blank'>
							<i
								className='fa fa-github'
								style={{
									fontSize: '40px',
									marginLeft: '20px'
								}}></i>
						</a>

						<p>
							Wenjobs is a full stack application that utilizes
							your linkedin connections and job postings from the
							web3 industry to help job seekers find valuable
							insights from their network to find their next dream
							job.
						</p>
						<div className='tagContainer'>
							<span className='tag'>React</span>
							<span className='tag'>JavaScript</span>
							<span className='tag'>Firebase</span>
							<span className='tag'>Puppeteer</span>
							<span className='tag'>Algolia</span>
							<span className='tag'>Express</span>
							<span className='tag'>Node.js</span>
						</div>
					</section>

					<section className='project'>
						<h3>Tech Prep</h3>

						<a
							className='projectLink'
							href='https://github.com/Tech-Prep/tech-prep'
							target='_blank'>
							<i
								className='fa fa-github'
								style={{
									fontSize: '40px',
									marginLeft: '20px'
								}}></i>
						</a>

						<p>
							Tech Prep is an Alexa skill that helps job seekers
							applying for software developer positions. It can
							help users by asking behavioral interview questions
							for a mock interview experience, it can ask users
							code challenges and set a timer for a whiteboarding
							experience, and it can also send job listings
							through a weekly subscription email with preset
							keywords.
						</p>

						<div className='tagContainer'>
							<span className='tag'>AWS</span>
							<span className='tag'>S3</span>
							<span className='tag'>Axios</span>
							<span className='tag'>AWS Lambda</span>
							<span className='tag'>Alexa SDK</span>
							<span className='tag'>AWS SES</span>
							<span className='tag'>JavaScript</span>
						</div>
					</section>
					<section className='project'>
						<h3>Budget App</h3>

						<a
							className='projectLink'
							href='https://github.com/Jacks-01/budget-front'
							target='_blank'>
							<i
								className='fa fa-github'
								style={{
									fontSize: '40px',
									marginLeft: '20px'
								}}></i>
						</a>

						<p>In progress... more to be added soon!</p>

						<div className='tagContainer'>
							<span className='tag'>TypeScript</span>
							<span className='tag'>React</span>
							<span className='tag'>Node</span>
							<span className='tag'>Express</span>
							<span className='tag'>Chakra</span>
							<span className='tag'>Framer</span>
							<span className='tag'>React Router</span>
							<span className='tag'>Plaid API</span>
							<span className='tag'>Axios</span>
						</div>
					</section>

					<section className='project'>
						<h3>
							<a
								className='projectLink'
								href='https://skywatchers.netlify.app/eclipse'
								target='_blank'>
								SkyWatchers
							</a>
						</h3>
						<a
							className='projectLink'
							href='https://github.com/Space-TFF/skyWatchers-frontend'
							target='_blank'>
							<i
								className='fa fa-github'
								style={{
									fontSize: '40px',
									marginLeft: '20px'
								}}></i>
						</a>

						<p>
							Skywatchers is an app that allows users find meetups
							for viewing the 2023 Solar Eclipse. Users can add
							their own events and register for others. The app
							utilizes the Google maps API that has the trajectory
							of the best viewing sites for the eclipse. There are
							plans in the future to expand this to other
							celestial events and not just the eclipse.
						</p>
						<div className='tagContainer'>
							<span className='tag'>React</span>
							<span className='tag'>JavaScript</span>
							<span className='tag'>Postgres</span>
							<span className='tag'>Prisma</span>
							<span className='tag'>Google Maps API</span>
							<span className='tag'>Express</span>
							<span className='tag'>Node.js</span>
							<span className='tag'>MUI</span>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Projects;
