import { FunctionComponent, ReactNode } from 'react';

// Animation
import { motion } from 'framer-motion';

// Style
import style from './style.module.scss';

// Interface
import IService from '../../interfaces/IService';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service,
}): ReactNode => {
	return (
		<div className={style.service_card}>
			<div className={style.top}>
				<motion.img
					whileInView={{
						opacity: [0, 1],
						scale: [0.5, 1],
					}}
					transition={{ duration: 1, delay: 0.3 }}
					src={service.image}
					alt={service.title}
				/>
				<motion.span
					whileInView={{
						opacity: [0, 1],
						x: [150, 0],
						scale: [0.5, 1],
					}}
					transition={{ duration: 1, delay: 0.3, ease: 'easeIn' }}
				>
					{service.title}
				</motion.span>
			</div>
			<div className={style.description}>
				<p>{service.description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
