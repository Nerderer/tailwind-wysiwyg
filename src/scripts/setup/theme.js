import twConfig from '../tailwind/defaultConfig.stub';

export default function (key) {
	return twConfig.theme[key];
}
