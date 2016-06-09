// Example images taken from http://docs.opencv.org/2.4/doc/tutorials/imgproc/histograms/template_matching/template_matching.html

var cv = require('opencv');

cv.readImage('./Template_Matching_Original_Image.jpg', function(err, im) {
	im.convertGrayscale();

	return cv.readImage('./Template_Matching_Template_Image.jpg', function(err, templ) {
		templ.convertGrayscale();

		// matching method (numbers) available: https://github.com/peterbraden/node-opencv/blob/13a1de4f9259b5e745021f3198a8339ac99edecd/src/Matrix.cc#L2262
		return im.matchTemplate(templ, 3, function(result){
			result.save('./result.jpg');
		});
	});
});
