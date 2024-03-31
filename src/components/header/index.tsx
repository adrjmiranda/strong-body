import { FunctionComponent, ReactNode } from 'react';

// Animation
import { motion } from 'framer-motion';

// Components
import Navbar from '../navbar';

// Style
import style from './style.module.scss';

// Images
import MainBg from '../../assets/img/main-bg.jpg';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<div
			className={style.header}
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), ' +
					'url(' +
					MainBg +
					')',
			}}
		>
			<Navbar />
			<motion.div
				className={style.info}
				whileInView={{
					opacity: [0, 1],
					y: ['16rem', '4rem'],
					x: ['-50%', '-50%'],
				}}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<h2>Challenge Your Limits Here!</h2>
				<p>
					Awaken your best version in our gym. A place where every effort is a
					victory, and every drop of sweat is a step towards your goals. We are
					here to challenge your limits. Come be part of this transformation!
				</p>
				<button className='button'>Subscribe</button>
			</motion.div>
		</div>
	);
};

export default Header;
