import { FunctionComponent, ReactNode } from 'react';

// Animation
import { motion } from 'framer-motion';

// Style
import style from './style.module.scss';

const Contact: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.contact}>
			<div className='wrapper'>
				<motion.div
					whileInView={{
						opacity: [0, 1],
						y: [-100, 0],
					}}
					transition={{ duration: 1, delay: 0.5 }}
					className={style.content}
				>
					<h2>Join us now to take a test</h2>
					<p>Take advantage of the 30-day trial</p>
					<form action='#'>
						<input type='email' name='email' placeholder='Your best email' />
						<button type='submit' className='button'>
							Subscribe now
						</button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
