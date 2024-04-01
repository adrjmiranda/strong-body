import { FunctionComponent, ReactNode } from 'react';

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
						<img src={GymHero} alt='Gym Hero' />
					</div>
					<div className={style.info}>
						<div className={style.item}>
							<div className={style.icon}>
								<FaTrophy />
							</div>
							<div className={style.text}>
								<h4>Earn certificate</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Natus amet harum sint commodi odio repellendus reprehenderit
									quasi dolor illo aliquid labore cupiditate ducimus, cumque
									asperiores corporis placeat dolore dolorum deleniti.
								</p>
							</div>
						</div>
						<div className={style.item}>
							<div className={style.icon}>
								<FaHeartPulse />
							</div>
							<div className={style.text}>
								<h4>Improve your health</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Mollitia optio quis at repellendus, facere porro omnis, rem,
									iusto dicta rerum alias dignissimos ut! Cumque reiciendis
									nulla nihil modi labore exercitationem.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
