import { FunctionComponent, ReactNode } from 'react';

// Components
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

const App: FunctionComponent = (): ReactNode => {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Benefits />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
