# url-string-api 
A parsing url and file purpose tool


## Install

```javascript
$ npm install -g url-string-api 

```


## Usage

```javascript

var stringTOOL = require('url-string-api')

stringTOOL.validateEmail("abc@abc.com") //return ture
stringTOOL.urlFileName("/path/to/file.jpg")  //return file.jpg
stringTOOL.urlGetPath("/path/to/file.jpg")  // return /path/to
stringTOOL.removeString("abcdefg","cd")   // return abefg
stringTOOL.removeSpace("a b c")  // return abc
stringTOOL.removeFileExtension("file.jpg")  //return file
stringTOOL.getFileExtension("file.jpg") 	//return jpg
stringTOOL.stringToArray("['abc','123']")  return ['abc','123']
stringTOOL.timestamp()  return 2334234324234
stringTOOL.stringFilter("abc._@^&#%$&")  // return abc._
stringTOOL.onlyCharNum("abc@^&#%$&")  //return abc
stringTOOL.valiFileName("/path/to/file.jpg")  //return /path/to/14234324.jpg

```


## License


[MIT](http://vjpr.mit-license.org)