import { FunctionComponent, ReactNode } from 'react';

// Animation
import { motion } from 'framer-motion';

// Style
import style from './style.module.scss';

// Images
import HeroBg from '../../assets/img/hero-bg.jpg';
import GymHero from '../../assets/img/gym-hero.png';

// Icons
import { FaTrophy } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';

const Benefits: FunctionComponent = (): ReactNode => {
	return (
		<div
			className={style.benefits}
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(' +
					HeroBg +
					')',
			}}
		>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.img}>
						<motion.img
							whileInView={{
								opacity: [0, 1],
								scale: [0.5, 1],
							}}
							transition={{ duration: 1, delay: 0.2 }}
							src={GymHero}
							alt='Gym Hero'
						/>
					</div>
					<div className={style.info}>
						<div className={style.item}>
							<motion.div
								whileInView={{
									opacity: [0, 1],
									scale: [0.5, 1],
								}}
								transition={{ duration: 1, delay: 0.3 }}
								className={style.icon}
							>
								<FaTrophy />
							</motion.div>
							<motion.div
								whileInView={{
									opacity: [0, 1],
									x: [200, 0],
								}}
								transition={{ duration: 1, delay: 0.3 }}
								className={style.text}
							>
								<h4>Earn certificate</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Natus amet harum sint commodi odio repellendus reprehenderit
									quasi dolor illo aliquid labore cupiditate ducimus, cumque
									asperiores corporis placeat dolore dolorum deleniti.
								</p>
							</motion.div>
						</div>
						<div className={style.item}>
							<motion.div
								whileInView={{
									opacity: [0, 1],
									scale: [0.5, 1],
								}}
								transition={{ duration: 1, delay: 0.3 }}
								className={style.icon}
							>
								<FaHeartPulse />
							</motion.div>
							<motion.div
								whileInView={{
									opacity: [0, 1],
									x: [200, 0],
								}}
								transition={{ duration: 1, delay: 0.5 }}
								className={style.text}
							>
								<h4>Improve your health</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Mollitia optio quis at repellendus, facere porro omnis, rem,
									iusto dicta rerum alias dignissimos ut! Cumque reiciendis
									nulla nihil modi labore exercitationem.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
