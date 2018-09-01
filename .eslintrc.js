module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['prettier'],
	extends: [
		'plugin:vue/essential',
		'plugin:prettier/recommended',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 0,
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'none',
				bracketSpacing: true,
				jsxBracketSameLine: true,
				parser: 'babylon'
			}
		]
	}
};
