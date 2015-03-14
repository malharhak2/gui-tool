requirejs.config ({
	baseUrl: 'js/',
	paths: {
		dat: "../libs/dat.gui"
	},
	shim: {
		dat: {
			exports: "dat"
		}
	},
	urlArgs: "d=" + Date.now()
});

requirejs(["editor", "gameloop"], function (editor, gameloop) {
	gameloop();
});