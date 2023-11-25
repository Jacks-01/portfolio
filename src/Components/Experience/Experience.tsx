import { FC } from 'react';
import './Experience.css';

interface Props {}

const Experience: FC<Props> = ({}) => {
	return (
		<>
			<div className='spacer curve'></div>
			<div className='experienceContainer'>
				<p className='experience'>Experience</p>
				{/* <div className='curve'></div> */}
				<div className='experienceParagraph'>
					<h3>
						Database & Application Developer - Roberts Technology
						Solutions
					</h3>
					<p>
						8-bit wayfarers jianbing subway tile, health goth
						snackwave post-ironic stumptown skateboard banjo
						bushwick neutra drinking vinegar shaman leggings. Deep v
						lumbersexual bitters godard vaporware wayfarers gatekeep
						tote bag butcher. Marfa health goth gatekeep cardigan
						schlitz kitsch taxidermy bespoke Brooklyn chicharrones
						yr kale chips vegan semiotics. Raclette jean shorts
						dreamcatcher fingerstache coloring book.
					</p>
					<p>
						Gochujang post-ironic fit tousled echo park microdosing.
						Paleo pinterest JOMO, blog put a bird on it XOXO cray
						mukbang quinoa. Ethical you probably haven't heard of
						them cold-pressed mumblecore, helvetica tousled iPhone
						yr banjo neutra single-origin coffee. Fingerstache
						jianbing vexillologist pour-over, irony fanny pack JOMO
						twee. Biodiesel big mood tilde, fanny pack neutra
						kombucha ennui whatever affogato.
					</p>
					s
				</div>
			</div>
		</>
	);
};

export default Experience;
