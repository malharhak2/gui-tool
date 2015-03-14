define(["editor", "device"], function (editor, device) {
	var gameloop = function () {
		render();
		window.requestAnimationFrame(gameloop);
	};

	function render () {
		device.ctx.fillStyle = "white";
		device.ctx.fillRect(0, 0, device.screenRes.width, device.screenRes.height);
		for (var i = 0; i < editor.elems.length; i++) {
			editor.elems[i].render(device.ctx, device.scale);
		}
		if (editor.selectedElem > -1) {
			var f = editor.elems[editor.selectedElem];
			editor.gizmo.render(device.ctx, f, device.scale);
		}
	}

	return gameloop;
});