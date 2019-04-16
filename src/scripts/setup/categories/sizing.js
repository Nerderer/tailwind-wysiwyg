import generateClasses from '../generateClasses';
import theme from '../theme';
import twConfig from '../../tailwind/defaultConfig.stub';

export default {
	name: 'Sizing',
	subCategories: [
		{
			name: 'Width',
			variants: twConfig.variants.width,
			groupedClasses: [
				generateClasses('w', twConfig.theme.width(theme))
			]
		},
		{
			name: 'Min-Width',
			variants: twConfig.variants.minWidth,
			groupedClasses: [
				['min-w-0', 'min-w-full']
			]
		},
		{
			name: 'Max-Width',
			variants: twConfig.variants.maxWidth,
			groupedClasses: [
				generateClasses('max-w', twConfig.theme.maxWidth)
			]
		},
		{
			name: 'Height',
			variants: twConfig.variants.height,
			groupedClasses: [
				generateClasses('h', twConfig.theme.height(theme))
			]
		},
		{
			name: 'Min-Height',
			variants: twConfig.variants.minHeight,
			groupedClasses: [
				generateClasses('h', twConfig.theme.minHeight)
			]
		},
		{
			name: 'Max-Height',
			variants: twConfig.variants.maxHeight,
			groupedClasses: [
				generateClasses('h', twConfig.theme.maxHeight)
			]
		},
	]
};
