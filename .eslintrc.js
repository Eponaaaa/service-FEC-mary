/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  env: {
		es6: true,
		browser: true,
		node: true,
	},
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
	plugins: [
		'import',
		'react',
	]
};