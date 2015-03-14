define([], function () {
	var EditorFrame = function (_name, _type, _meta, info) {
		this.elem = {
			_name: _name,
			_type: _type,
		};
		this._meta = _meta;
		if (info) {
			for (var i in info) {
				this.elem[i] = info[i];
			}
		}
	};

	EditorFrame.prototype.render = function (ctx, scale) {
		if (this.elem._type == "image") {
			var img = this._meta.image;
			var f = this.elem;
			this.drawPosition = {
				x: (f.x - (f.anchorX * f.w)) * scale,
				y: (f.y - (f.anchorY * f.h)) * scale,
				w: f.w * scale,
				h: f.h * scale
			};
			ctx.drawImage(img,
				0, 0, img.width, img.height,
				this.drawPosition.x, this.drawPosition.y,
				this.drawPosition.w, this.drawPosition.h);
		}
	};

	return EditorFrame;
});