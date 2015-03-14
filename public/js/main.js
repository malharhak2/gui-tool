requirejs.config ({
	baseUrl: 'js/'
});

require([], function () {
	console.log('Hello world');
});