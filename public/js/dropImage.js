define(["config"],
	function (config) {

	var onDropImage = false;
	var dropImage = function () {
		$(config.container).on(
		    'dragover',
		    function(e) {
		        e.preventDefault();
		        e.stopPropagation();
		    }
		);
		$(config.container).on(
		    'dragenter',
		    function(e) {
		        e.preventDefault();
		        e.stopPropagation();
		    }
		);
		$(config.container).on(
		    'drop',
		    function(e){
		        if(e.originalEvent.dataTransfer){
		            if(e.originalEvent.dataTransfer.files.length) {
		            		console.log(e.originalEvent.dataTransfer.files);
		                e.preventDefault();
		                e.stopPropagation();
		                loadImage(e.originalEvent.dataTransfer.files[0], e.originalEvent);
		                /*UPLOAD FILES HERE*/
		            }
		        }
		    }
		);
		return true;
	};

	function loadImage(path, event) {
		if (!path.type.match(/image.*/)) {
			console.error("The dropped file is not an image");
			return false;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			//console.log(e.target.result, event.pageX - $(container).offset().left);
			var offset = $(container).offset();
			var x = event.pageX - offset.left;
			var y = event.pageY - offset.top;
			if (onDropImage) {
				onDropImage(e.target.result, x, y);
			}
		};
		reader.readAsDataURL(path);
	}

	console.log("lol");
	dropImage();
	return function (callback) {
		onDropImage = callback;
	};
});