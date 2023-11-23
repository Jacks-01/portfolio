import { FC } from 'react';
import './About.css';

interface Props {}

const About: FC<Props> = ({}) => {
	return (
		<>
			<div className='aboutContainer'>
				<p className='about'>About</p>
				<p className='aboutParagraph'>
					8-bit wayfarers jianbing subway tile, health goth snackwave
					post-ironic stumptown skateboard banjo bushwick neutra
					drinking vinegar shaman leggings. Deep v lumbersexual
					bitters godard vaporware wayfarers gatekeep tote bag
					butcher. Marfa health goth gatekeep cardigan schlitz kitsch
					taxidermy bespoke Brooklyn chicharrones yr kale chips vegan
					semiotics. Raclette jean shorts dreamcatcher fingerstache
					coloring book.
				</p>
			</div>
		</>
	);
};

export default About;
