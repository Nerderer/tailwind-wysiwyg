import twConfig from '../../tailwind/defaultConfig.stub';

export default {
	name: 'Flexbox',
	subCategories: [
		{
			name: 'Flex Direction',
			variants: twConfig.variants.flexDirection,
			groupedClasses: [
				['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse']
			]
		},
		{
			name: 'Flex Wrapping',
			variants: twConfig.variants.flexWrap,
			groupedClasses: [
				['flex-no-wrap', 'flex-wrap', 'flex-wrap-reverse']
			]
		},
		{
			name: 'Align Items',
			variants: twConfig.variants.alignItems,
			groupedClasses: [
				['items-stretch', 'items-start', 'items-center', 'items-end', 'items-baseline']
			]
		},
		{
			name: 'Align Content',
			variants: twConfig.variants.alignContent,
			groupedClasses: [
				['content-start', 'content-center', 'content-end', 'content-between', 'content-around']
			]
		},
		{
			name: 'Align Self',
			variants: twConfig.variants.alignSelf,
			groupedClasses: [
				['self-auto', 'self-start', 'self-center', 'self-end', 'self-stretch']
			]
		},
		{
			name: 'Justify Content',
			variants: twConfig.variants.justifyContent,
			groupedClasses: [
				['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around']
			]
		},
		{
			name: 'Flex',
			variants: twConfig.variants.flex,
			groupedClasses: [
				['flex-initial', 'flex-1', 'flex-auto', 'flex-none']
			]
		},
		{
			name: 'Flex Grow',
			variants: twConfig.variants.flexGrow,
			groupedClasses: [
				['flex-grow', 'flex-grow-0']
			]
		},
		{
			name: 'Flex Shrink',
			variants: twConfig.variants.flexShrink,
			groupedClasses: [
				['flex-shrink', 'flex-shrink-0']
			]
		},
	]
};
