import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Fictitious Data
import servicesData from '../../assets/data/services';
import ServiceCard from '../service-card';

const Services: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.services}>
			<div className='wrapper'>
				<div className={style.content}>
					{servicesData.length > 0 &&
						servicesData.map((service) => (
							<ServiceCard service={service} key={service.id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Services;
