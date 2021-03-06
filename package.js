Package.describe({
	name: 'nathantreid:css-modules-js-compiler',
	version: '0.0.3',
	// Brief, one-line summary of the package.
	summary: 'JS 2015 processor for nathantreid:css-modules',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/nathantreid/meteor-css-modules-js-compiler.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.0.1');
	api.use([
		'babel-compiler',
		'ecmascript',
		'nathantreid:css-modules-import-path-helpers@0.0.1'
	]);

	api.imply('babel-runtime');
	api.imply('ecmascript-runtime@0.1.6');
	api.imply('promise');

	api.addFiles([
		'js-compiler.js',
	]);

	api.export("ECMAScript");
	api.export("ImportPathHelpers");
	api.export("JsCompiler");
});
