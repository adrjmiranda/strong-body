export default interface IAbout {
	id: number;
	picture: {
		image: string;
		call: {
			title: string;
			subTitle: string;
		};
	};
	info: {
		title: string;
		p1: string;
		p2: string;
	};
}
