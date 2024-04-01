import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Icons
import { FaTwitter } from 'react-icons/fa';

// Interface
import ITestimonial from '../../interfaces/ITestimonial';

const TestimonialCard: FunctionComponent<{
	data: ITestimonial;
}> = ({ data }): ReactNode => {
	return (
		<div className={style.testimonial_card}>
			<div className={style.img}>
				<img src={data.userPhoto} alt={data.userName} />
			</div>
			<div className={style.content}>
				<div className={style.text}>
					<p>{data.testimonial}</p>
				</div>
				<div className={style.user_name}>
					<FaTwitter />
					<span>{data.userName}</span>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
