## Test for template matching using node-opencv

### Credits
Example images were taken from: http://docs.opencv.org/2.4/doc/tutorials/imgproc/histograms/template_matching/template_matching.html


## Installation + Run
````
($ cd ~/src)
$ git clone https://github.com/strarsis/node-opencv-templatematching-test.git
$ cd node-openvc-templatematching-test
($ nvm use 6.2.1)
$ npm install
$ node test.js
````

Exception occurs (here using node v6.2.1, npm 3.9.3):
````
OpenCV Error: Assertion failed (corrsize.height <= img.rows + templ.rows - 1 && corrsize.width <= img.cols + templ.cols - 1) in crossCorr, file /home/build/src/CV/opencv/OpenCV/modules/imgproc/src/templmatch.cpp, line 658
terminate called after throwing an instance of 'cv::Exception'
  what():  /home/build/src/CV/opencv/OpenCV/modules/imgproc/src/templmatch.cpp:658: error: (-215) corrsize.height <= img.rows + templ.rows - 1 && corrsize.width <= img.cols + templ.cols - 1 in function crossCorr

Aborted
````
