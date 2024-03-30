import { FunctionComponent, ReactNode } from 'react';

// Components
import Navbar from '../navbar';
import MainBanner from '../main-banner';

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
					'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), ' +
					'url(' +
					MainBg +
					')',
			}}
		>
			<Navbar />
			<MainBanner />
			<div className={style.info}></div>
		</div>
	);
};

export default Header;
