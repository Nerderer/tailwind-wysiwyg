import twConfig from '../../tailwind/defaultConfig.stub';

export default {
	name: 'SVG',
	subCategories: [
		{
			name: 'Fill',
			variants: twConfig.variants.fill,
			groupedClasses: [
				['fill-current']
			]
		},
		{
			name: 'Stroke',
			variants: twConfig.variants.stroke,
			groupedClasses: [
				['stroke-current']
			]
		},
	]
};
