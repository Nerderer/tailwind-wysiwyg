import twConfig from '../../tailwind/defaultConfig.stub';
import generateClasses from '../generateClasses';

export default {
	name: 'Effects',
	subCategories: [
		{
			name: 'Box Shadow',
			variants: twConfig.variants.boxShadow,
			groupedClasses: [
				generateClasses('shadow', twConfig.theme.boxShadow)
			]
		},
		{
			name: 'Opacity',
			variants: twConfig.variants.opacity,
			groupedClasses: [
				generateClasses('opacity', twConfig.theme.opacity)
			]
		},
	]
};
