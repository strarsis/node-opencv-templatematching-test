## Test for template matching using node-opencv


### Credits
Example images were taken from: http://docs.opencv.org/2.4/doc/tutorials/imgproc/histograms/template_matching/template_matching.html


### Installation + Run
````
($ cd ~/src)
$ git clone https://github.com/strarsis/node-opencv-templatematching-test.git
$ cd node-openvc-templatematching-test
($ nvm use 6.2.1)
$ npm install
$ node test.js
````

Note: There is now a matchTemplateByMatrix(...) method which allows matching against an node-opencv matrix instead a file on disk by path.
