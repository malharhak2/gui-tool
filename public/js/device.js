define(["config"],
function (config) {

	var Device = function () {
		this.resolution = {
			width: 640,
			height: 1136
		};
		this.canvas = $("#screen");
		this.ctx = this.canvas[0].getContext('2d');
		var self = this
		this.canvas.on('click', function (event) {
			self.click(event);
		});
	};

	Device.prototype.resize = function (resolution, suffix) {
		var widthScale = Math.round(resolution.width / window.innerWidth);
		var heightScale = Math.round(resolution.height / window.innerHeight);
		this.scale = widthScale;
		if (heightScale > widthScale) {
			this.scale = heightScale;
		}
		this.scale = 1 / this.scale;
		this.imageSuffix = suffix;
		this.resolution = {
			width: resolution.width,
			height: resolution.height
		};
		this.screenRes = {
			width: resolution.width * this.scale,
			height: resolution.height * this.scale
		};
		$(".device").css({
			height: this.screenRes.height + 4,
			width: this.screenRes.width + 4,
			marginTop: - this.screenRes.height / 2 - 2,
			marginLeft: - this.screenRes.width / 2 - 2
		});
		$("#screen").attr({
			height: this.screenRes.height,
			width: this.screenRes.width
		});
		$("#screen").css({
			height: this.screenRes.height,
			width: this.screenRes.width
		});
	};

	Device.prototype.getMousePosition = function (event) {
		var offset = $(config.container).offset();
		var x = event.pageX - offset.left;
		var y = event.pageY - offset.top;
		return {
			x: x,
			y: y
		};
	};

	Device.prototype.onClick = function (callback) {
		this.onClickCallback = callback;
	};
	Device.prototype.click = function (event) {
		if (this.onClickCallback) {
			var mPos = this.getMousePosition(event);
			this.onClickCallback(mPos);
		}
	};
	var device = new Device();
	return device;
});