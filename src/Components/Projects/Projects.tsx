import { FC } from 'react';
import './Projects.css';

interface Props {}

const Projects: FC<Props> = ({}) => {
	return (
		<>
			<div className='spacer squiggle'></div>
			<div className='projectContainer'>
				<p id='project' className='project'>Projects</p>
				<div className='projectParagraph'>
					<section className='job'>
						<h3>Example Project</h3>
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
