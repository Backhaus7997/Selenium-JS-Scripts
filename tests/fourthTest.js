import { Builder, By, Key } from 'selenium-webdriver';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { should } from 'chai';

should();

describe('Testing of basic tests', function() {
    let driver;

    beforeEach(async function() {
        this.timeout(20000000);  // Increase the timeout for beforeEach to 20 seconds
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.techlistic.com/p/selenium-practice-form.html');
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('completamos un form de first y second name using XPath', async function() { 
        await driver.findElement(By.xpath("(//input[@name='firstname'])[1]")).sendKeys('Martin', Key.RETURN);
        await driver.findElement(By.xpath("(//input[@name='firstname'])[2]")).sendKeys('Backhaus', Key.RETURN);
    });

    it('completamos un form de first y second name using CSS Selector', async function() { 
        const elements = await driver.findElements(By.css("input[name='firstname']"));
        await elements[0].sendKeys('Martin', Key.RETURN);
        await elements[1].sendKeys('Backhaus', Key.RETURN);
    });
});
