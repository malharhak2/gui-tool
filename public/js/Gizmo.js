define ([], function () {
	var crossLength = 20;
	var Gizmo = function () {

	};

	Gizmo.prototype.render = function(ctx, elem, scale) {
		ctx.save();
		ctx.strokeStyle = "green";
		ctx.lineWidth = 2;
		ctx.strokeRect(elem.drawPosition.x, elem.drawPosition.y,
			elem.drawPosition.w, elem.drawPosition.h);

		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(elem.elem.x * scale, (elem.elem.y - crossLength) * scale);
		ctx.lineTo(elem.elem.x * scale, (elem.elem.y + crossLength) * scale);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.strokeStyle = "blue";
		ctx.moveTo((elem.elem.x - crossLength) * scale, elem.elem.y * scale);
		ctx.lineTo((elem.elem.x + crossLength) * scale, elem.elem.y * scale);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	};

	return Gizmo;
});