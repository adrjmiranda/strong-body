import { FunctionComponent, ReactNode, useState } from 'react';

// Style
import style from './style.module.scss';

// Images
import Logo from '../../assets/img/logo.png';

// Icons
import { TfiMenu } from 'react-icons/tfi';
import { IoMdClose } from 'react-icons/io';

const Navbar: FunctionComponent = (): ReactNode => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className={style.navbar}>
			<div className='wrapper'>
				<div className={style.content}>
					<a href='#' className={style.logo}>
						<img src={Logo} alt='Logo' />
						<span>Strong Body</span>
					</a>
					<button className={style.toggle_menu} onClick={handleShowMenu}>
						{showMenu ? <IoMdClose /> : <TfiMenu />}
					</button>
					<div className={`${style['menu']} ${showMenu ? style['show'] : ''}`}>
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
		</div>
	);
};

export default Navbar;
