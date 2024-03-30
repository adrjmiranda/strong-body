import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import Logo from '../../assets/img/logo.png';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.navbar}>
			<div className='wrapper'>
				<div className={style.logo}>
					<a href='#'>
						<img src={Logo} alt='Logo' />
						<span>Strong Body</span>
					</a>
				</div>
				<div className={style.menu}>
					<ul>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Benefits</a>
						</li>
						<li>
							<a href='#'>Testimonials</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
