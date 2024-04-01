import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

const Contact: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.contact}>
			<div className='wrapper'>
				<div className={style.content}>
					<h2>Join us now to take a test</h2>
					<p>Take advantage of the 30-day trial</p>
					<form action='#'>
						<input type='email' name='email' placeholder='Your best email' />
						<button type='submit' className='button'>
							Subscribe now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
