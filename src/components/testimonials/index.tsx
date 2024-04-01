import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Dummy Data
import testimonialsData from '../../assets/data/testimonials';
import TestimonialCard from '../testimonial-card';

const Testimonials: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.testimonials}>
			<div className='wrapper'>
				<div className={style.top}>
					<h2>See what our customers are saying</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatibus, itaque, dignissimos iusto earum neque sed dolorum
						exercitationem accusamus veritatis soluta eos perferendis cum,
						doloremque quibusdam assumenda! Alias animi quaerat esse.
					</p>
				</div>
				<div className={style.users}>
					{testimonialsData.length > 0 &&
						testimonialsData.map((testimonial) => (
							<TestimonialCard data={testimonial} key={testimonial.id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
