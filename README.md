# CodeceptJS example

This repository applies CodeceptJS and WebdriverIO to automated some testing scenarios on https://bluescapeqainterview.wordpress.com/contact/. 

## Installation

Clone this repository:

```bash
git clone https://github.com/saeeron/bluescape_mini_project
```
and install dependencies:
```
cd bluescape_mini_project
npm install -d 
```
## Usage
Run test by executing
```angular2html
npx codeceptjs run --steps  
```
See an allure report by executing (allure needs to be installed seperately using "brew"
on macOS or "scoop" on Windows)
```angular2html
allure serve .\output\
```





