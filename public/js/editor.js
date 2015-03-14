define([
	"device",
	"dropImage",
	"dat",
	"EditorFrame",
	"Gizmo"],
function (device, dropImage, dat, EditorFrame, Gizmo) {

	var gui = new dat.GUI();
	var Editor = function () {
		this.elems = [];
		this.gizmo = new Gizmo();
		this.selectedElem = -1;
	};

	Editor.prototype.onDropImage = function (url, x, y) {
		var name = prompt("Please enter the image name", "background_game");
		if (name) {
			var image = new Image();
			image.src = url;
			this.elems.push (new EditorFrame(
				name, "image",
				{image: image},
				{
					w: image.width,
					h: image.height,
					x: x / device.scale,
					y: y / device.scale,
					anchorX: 0.5,
					anchorY: 0.5
				}
			));
			this.selectedElem = this.elems.length - 1;
		}
		console.log(this.elems);
	};
	Editor.prototype.onClick = function (mousePosition) {
		console.log(mousePosition);
	};

	device.resize({width: 640, height: 1136}, "@2x");
	var editor = new Editor();
	device.onClick(function (event) {
		editor.onClick (event);
	});
	dropImage(function (url, x, y) {
		editor.onDropImage(url, x, y);
	});

	return editor;
});