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
						<h3>Wenjobs</h3>
						<p>
							Wenjobs is a full stack application that utilizes
							your linkedin connections and job postings from the
							web3 industry to help job seekers find valuable
							insights from their network to find their next dream
							job.
						</p>
						<div className='tagContainer'>
							{/* Tags go here */}
							<span className='tag'>React</span>
							<span className='tag'>JavaScript</span>
							<span className='tag'>Firebase</span>
							<span className='tag'>Puppeteer</span>
							<span className='tag'>Algolia</span>
						</div>
					</section>

					<section className='project'>
						<h3>Another Example Project</h3>
						<p>
							8-bit wayfarers jianbing subway tile, health goth
							snackwave post-ironic stumptown skateboard banjo
							bushwick neutra drinking vinegar shaman leggings.
							Deep v lumbersexual bitters godard vaporware
							wayfarers gatekeep tote bag butcher. Marfa health
							goth gatekeep cardigan schlitz kitsch taxidermy
							bespoke Brooklyn chicharrones yr kale chips vegan
							semiotics. Raclette jean shorts dreamcatcher
							fingerstache coloring book.
						</p>
					</section>
				</div>
			</div>
		</>
	);
};

export default Projects;
