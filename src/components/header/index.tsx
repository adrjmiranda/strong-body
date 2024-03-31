import { FunctionComponent, ReactNode } from 'react';

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
			<div className={style.info}>
				<h2>Challenge Your Limits Here!</h2>
				<p>
					Awaken your best version in our gym. A place where every effort is a
					victory, and every drop of sweat is a step towards your goals. We are
					here to challenge your limits. Come be part of this transformation!
				</p>
				<button className='button'>Subscribe</button>
			</div>
		</div>
	);
};

export default Header;
