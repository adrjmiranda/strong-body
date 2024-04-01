import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import Logo from '../../assets/img/logo.png';

// Icons
import { FaHeart } from 'react-icons/fa';
import {
	FaSquareFacebook,
	FaYoutube,
	FaLinkedin,
	FaSquareTwitter,
	FaPhone,
	FaHouseChimney,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.footer}>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.col}>
						<a href='#' className={style.logo}>
							<img src={Logo} alt='Logo' />
							<span>Strong Body</span>
						</a>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil
							dolores, ut architecto earum voluptatem natus sit perspiciatis,
							aperiam sapiente quia ipsa nesciunt vitae temporibus, veritatis
							consectetur consequuntur quibusdam animi.
						</p>
					</div>
					<div className={style.col}>
						<h4>Benefits</h4>
						<ul>
							<li>
								<a href='#' target='_blank'>
									<span>Certification delivery</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<span>Performance improvement</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<span>Private lessons</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<span>Trained teachers</span>
								</a>
							</li>
						</ul>
					</div>
					<div className={style.col}>
						<h4>Contact us</h4>
						<ul>
							<li>
								<a href='#' target='_blank'>
									<FaPhone />
									<span>+11 0123-4567</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<MdEmail />
									<span>contact@email.com</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<FaHouseChimney />
									<span>JJJ Street - ZZZ City</span>
								</a>
							</li>
						</ul>
					</div>
					<div className={style.col}>
						<h4>Follow us</h4>
						<ul>
							<li>
								<a href='#' target='_blank'>
									<FaSquareFacebook />
									<span>Facebook</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<FaYoutube />
									<span>Youtube</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<FaLinkedin />
									<span>Linkedin</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<FaSquareTwitter />
									<span>Twitter</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.footer_bottom}>
					<p>
						Made with by <FaHeart /> Adriano Miranda &copy; 2024
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
