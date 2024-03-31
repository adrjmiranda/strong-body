import { FunctionComponent, ReactNode } from 'react';

// Animations
import { motion } from 'framer-motion';

// Style
import style from './style.module.scss';

// Interfaces
import IAbout from '../../interfaces/IAbout';

// Icons
import { CgGym } from 'react-icons/cg';

const AboutCard: FunctionComponent<{ data: IAbout }> = ({
	data,
}): ReactNode => {
	return (
		<motion.div
			className={style.about_card}
			style={{ flexDirection: data.id % 2 === 0 ? 'row' : 'row-reverse' }}
			whileInView={{
				opacity: [0, 1],
			}}
			transition={{ duration: 1 }}
		>
			<div className={style.img}>
				<motion.img
					whileInView={{
						opacity: [0, 1],
						x: data.id % 2 === 0 ? [-500, 0] : [500, 0],
					}}
					transition={{ duration: 0.5, delay: 0.5 }}
					src={data.picture.image}
					alt={data.info.title}
				/>
				<div className={style.call}>
					<span className={style.title}>{data.picture.call.title}</span>
					<span className={style.sub_title}>{data.picture.call.subTitle}</span>
				</div>
			</div>
			<motion.div
				whileInView={{
					opacity: [0, 1],
					x: data.id % 2 !== 0 ? [-500, 0] : [500, 0],
				}}
				transition={{ duration: 0.5, delay: 0.5 }}
				className={style.info}
			>
				<h3>
					<CgGym />
					{data.info.title}
				</h3>
				<p>{data.info.p1}</p>
				<p>{data.info.p2}</p>
			</motion.div>
		</motion.div>
	);
};

export default AboutCard;
