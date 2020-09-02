let homepage = require('../pages/homepage')
describe('demo calc tests', function(){

    it ('addition test', function(){
        // demo angular application
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // select element by ng-model 
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('10');
        
        // wait for 2 sec
        browser.sleep(2000);
    });

    //xit to not run the tests
    it ('subtraction test', function(){
        // demo angular application
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // select element by ng-model 
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('2');
        
        // wait for 2 sec
        browser.sleep(2000);


    });

});