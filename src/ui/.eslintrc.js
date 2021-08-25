module.exports = {
	env: {
		node: false,
	},
	"extends": [
		"plugin:vue/essential",
		'airbnb-base',
	],
	"parserOptions": {
		"parser": "babel-eslint"
	},
	rules: {
		// use 4 space indentations
		// indent: [2, 4],
		// be tolerant of Windows-style CRLF line endings
		// 'linebreak-style': 0,
		// allow console.log
		// 'no-console': 0,
		"no-undef":"off",
		"prefer-const":"off",
		"quotes":"off",
		"prefer-template":"off",
		"indent":"off",
		"object-curly-spacing":"off",
		"no-trailing-spaces":"off",
		"prefer-destructuring":"off",
		"comma-dangle":"off",
		"semi":"off",
		"padded-blocks": "off",
		"max-len": "off",
		"comma-spacing": "off",
		"key-spacing": "off",
		"eqeqeq": "off",
		"no-multiple-empty-lines":"off"
	},
};
