import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Fictitious Data
import aboutData from '../../assets/data/about';
import AboutCard from '../about-card';

const About: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.about}>
			<div className='wrapper'>
				<div className={style.content}>
					{aboutData.length > 0 &&
						aboutData.map((data) => <AboutCard data={data} key={data.id} />)}
				</div>
			</div>
		</div>
	);
};

export default About;
