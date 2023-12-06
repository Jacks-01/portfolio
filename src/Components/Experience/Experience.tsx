import { FC } from 'react';
import './Experience.css';

interface Props {}

const Experience: FC<Props> = ({}) => {
	return (
		<>
			<div className='spacer curve'></div>
			<div className='experienceContainer'>
				<p
					id='experience'
					className='experience'>
					Experience
				</p>
				<div className='experienceParagraph'>
					<section className='job'>
						<h3>
							Database & Application Developer - Roberts
							Technology Solutions
						</h3>
						<h4>April 2023 - Current</h4>
						<p>
							During my time at RTS, I was responsible for a very
							wide variety of technologies such as SQL Server,
							.NET applications, SSRS, and other data solutions. I
							also created and maintained small applications for
							internal and external use. Examples are custom
							dashboards, integrations between CRM's, and
							independent applications for specific business needs
						</p>
					</section>
					<section className='job'>
						<h3>
							Software Developer Intern - Letter B Global
							Techonologies
						</h3>
						<h4>Feburary 2023 - May 2023</h4>
						<p>
							As an intern at Letter B, my primary task was to
							help develop a custom CRM for internal using the
							.NET stack. I worked with the other interns and
							engineers to develop the CRM using best practices
							such as TDD, Agile, and Azure CI/CD pipelines.
						</p>
					</section>

					<section className='job'>
						<h3>Teaching Assistant - DeltaV Code School</h3>
						<h4>October 2022 - May 2023</h4>
						<p>
							At DeltaV, I helped students going through the full
							stack JavaScript development course with
							assignments, projects, and tutoring when nessecary.
							I also taught the introductory web development
							classes and helped students decide if a career in
							software development was for them.
						</p>
					</section>
				</div>
			</div>
		</>
	);
};

export default Experience;
