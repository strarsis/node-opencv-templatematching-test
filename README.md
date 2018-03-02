## Test for template matching using node-opencv

Note: There is now also a [`matchTemplateByMatrix(...)`](https://github.com/peterbraden/node-opencv/blob/4586b9bd40c75e795a11db6f898a60aa8654354c/CHANGELOG.md#enhancements) function which allows matching against an node-opencv matrix instead a file on disk by path.


### Credits
- Example images were taken from: http://docs.opencv.org/2.4/doc/tutorials/imgproc/histograms/template_matching/template_matching.html
- Important addition by [pkallos](https://github.com/pkallos)


### Installation + Run
````
($ cd ~/src)
$ git clone https://github.com/strarsis/node-opencv-templatematching-test.git
$ cd node-openvc-templatematching-test
($ nvm use 6.2.1)
$ npm install
$ node test.js
````
