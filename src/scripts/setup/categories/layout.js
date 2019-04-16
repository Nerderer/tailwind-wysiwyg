import twConfig from '../../tailwind/defaultConfig.stub';
import generateClasses from '../generateClasses';

export default {
	name: 'Layout',
	subCategories: [
		{
			name: 'Container',
			variants: twConfig.variants.container,
			groupedClasses: [
				['container']
			]
		},
		{
			name: 'Display',
			variants: twConfig.variants.display,
			groupedClasses: [
				['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'table-row', 'table-cell', 'hidden']
			]
		},
		{
			name: 'Float',
			variants: twConfig.variants.float,
			groupedClasses: [
				['float-right', 'float-left', 'float-none', 'clearfix']
			]
		},
		{
			name: 'Object Fit',
			variants: twConfig.variants.objectFit,
			groupedClasses: [
				['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down']
			]
		},
		{
			name: 'Object Position',
			variants: twConfig.variants.objectPosition,
			groupedClasses: [
				generateClasses('object', twConfig.theme.objectPosition)
			]
		},
		{
			name: 'Overflow',
			variants: twConfig.variants.overflow,
			groupedClasses: [
				['overflow-auto', 'overflow-hidden', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
				['scrolling-touch', 'scrolling-auto']
			]
		},
		{
			name: 'Position',
			variants: twConfig.variants.position,
			groupedClasses: [
				['static', 'fixed', 'absolute', 'relative', 'sticky']
			]
		},
		{
			name: 'Top / Right / Bottom / Left',
			variants: twConfig.variants.inset,
			groupedClasses: [
				['inset-0', 'inset-auto'],
				['inset-y-0', 'inset-y-auto'],
				['inset-x-0', 'inset-x-auto'],
				['top-0', 'top-auto'],
				['right-0', 'right-auto'],
				['bottom-0', 'bottom-auto'],
				['left-0', 'left-auto']
			]
		},
		{
			name: 'Visibility',
			variants: twConfig.variants.visibility,
			groupedClasses: [
				['visible', 'invisible'],
			]
		},
		{
			name: 'Z-Index',
			variants: twConfig.variants.zIndex,
			groupedClasses: [
				generateClasses('z', twConfig.theme.zIndex)
			]
		},
	]
};
