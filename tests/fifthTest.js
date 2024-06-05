import { Builder, By, Key, until } from 'selenium-webdriver';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { should } from 'chai';

should();

describe('Testing of basic tests', function() {
    let driver;

    beforeEach(async function() {
        this.timeout(20000000);  // Increase the timeout for beforeEach to 20 seconds
        console.log('Starting the browser...');
        driver = await new Builder().forBrowser('firefox').build();
        console.log('Browser started, loading the page...');
        await driver.get('https://www.techlistic.com/p/selenium-practice-form.html');
        console.log('Page loaded');
    });

    afterEach(async function() {
        console.log('Quitting the browser...');
        await driver.quit();
        console.log('Browser quit');
    });

    it('completamos un form de first y second name using XPath', async function() {
        console.log('Filling the form using XPath...');
        const firstNameInput = await driver.wait(until.elementLocated(By.xpath("(//input[@name='firstname'])[1]")), 10000000);
        await firstNameInput.sendKeys('Martin', Key.RETURN);

        const lastNameInput = await driver.wait(until.elementLocated(By.xpath("(//input[@name='firstname'])[2]")), 10000000);
        await lastNameInput.sendKeys('Backhaus', Key.RETURN);

        console.log('Form filled using XPath');
    });

    
});
