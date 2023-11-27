import { FC } from 'react';
import './Projects.css';

interface Props {}

const Projects: FC<Props> = ({}) => {
	return (
		<>
			<div className='spacerBlue squiggle'></div>
			<div className='projectsContainer'>
				<p id='projects' className='projects'>Projects</p>
				<div className='projectsParagraph'>
					<section className='project'>
						<h3>
							Example Project
						</h3>
						<p>
							Gochujang post-ironic fit tousled echo park
							microdosing. Paleo pinterest JOMO, blog put a bird
							on it XOXO cray mukbang quinoa. Ethical you probably
							haven't heard of them cold-pressed mumblecore,
							helvetica tousled iPhone yr banjo neutra
							single-origin coffee. Fingerstache jianbing
							vexillologist pour-over, irony fanny pack JOMO twee.
							Biodiesel big mood tilde, fanny pack neutra kombucha
							ennui whatever affogato.
						</p>
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
