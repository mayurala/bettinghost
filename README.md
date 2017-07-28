# Building a betting host

The code is built with node.js.

# Quick Start
Program requires [Node.js](https://nodejs.org/) v6.10.0+ to run.
Install following libraries on your system if not installed
  - Install [Node](https://nodejs.org/en/download/package-manager/) on your system
  - Install [Grunt](https://gruntjs.com/installing-grunt) on your system
  - Install [Mocha](https://www.npmjs.com/package/mocha) and [Chai](http://chaijs.com/guide/installation/) for testing

### Installation
Install the devDependencies to run the code and test.

```sh
$ cd bettinghost
$ npm install -d
# to run the application
$ node index
```

### Usage
Make sure you're in the bettinghost root directory and run the following command on terminal.
```sh
$ npm start
```
Prompt will appear for the input data 
```sh
> node index.js

Please provide the dummy data input and press 'Enter' followed by ctrl t
```
User need to paste the following data as input data in the terminal and press 'Enter' to submit data to the application and press 'ctrl + t' for the next prompt.
> Dummy data should be in [ Bet:`<product>`:`<selections>`:`<stake> `] format    
```sh
Bet:W:1:3
Bet:W:2:4
Bet:W:3:5
Bet:W:4:5
Bet:W:1:16
Bet:W:2:8
Bet:W:3:22
Bet:W:4:57
Bet:W:1:42
Bet:W:2:98
Bet:W:3:63
Bet:W:4:15
Bet:P:1:31
Bet:P:2:89
Bet:P:3:28
Bet:P:4:72
Bet:P:1:40
Bet:P:2:16
Bet:P:3:82
Bet:P:4:52
Bet:P:1:18
Bet:P:2:74
Bet:P:3:39
Bet:P:4:105
Bet:E:1,2:13
Bet:E:2,3:98
Bet:E:1,3:82
Bet:E:3,2:27
Bet:E:1,2:5
Bet:E:2,3:61
Bet:E:1,3:28
Bet:E:3,2:25
Bet:E:1,2:81
Bet:E:2,3:47
Bet:E:1,3:93
Bet:E:3,2:51
```
After providing dummy data and pressing 'Ctrl+t', following prompt will appear on your terminal and ask for the result data.
```sh
Data has been submitted please submit the result and Press 'Ctrl+D'
```
Copy the following result data and paste to input terminal and press 'enter'.
Press 'ctrl+d' to see the result.
> Result data should be in [ Result:`<first>`:`<second>`:`<third>` ] format  
```sh
Result:2:3:1
```
### Result appear on terminal 
```sh
Result is :
 Win:2:$2.61
 Place:2:$1.06
 Place:3:$1.27
 Place:1:$2.13
 Exacta:2,3:$2.43
```
### Running the test suite

```sh
# Make sure you're in the bettinghost root directory and run:
$ npm install --dev
$ npm install -g mocha
$ mocha
```
Alternatively you can run the test by following command

```sh
$ npm test
```

```sh
> mocha
  betting
    Should check productTotal() return product total
      ✓ Should return  w product total amount
      ✓ Should return  p product total amount
      ✓ Should return  p product total amount
    Should check getPunterAmount() return winner punter total
      ✓ Should return  w  winner punter total amount
      ✓ Should return  p  winner punter total amount
      ✓ Should return  e  winner punter total amount
      
  6 passing (11ms)
```

