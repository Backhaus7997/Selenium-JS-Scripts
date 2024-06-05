import { Builder, By, Key } from 'selenium-webdriver';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { should } from 'chai';
import SeleniumPracticeFormPage from './seleniumPracticeFormPage.js';
import firefox from 'selenium-webdriver/firefox.js';

should();

describe('Testing of basic tests', function() {
    let driver;
    let seleniumPracticeFormPage;

    beforeEach(async function() {
        this.timeout(20000); // Set a reasonable timeout
        console.log('Starting the browser...');

        const options = new firefox.Options();
        options.addArguments('--headless');  // Run in headless mode for better performance

        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        seleniumPracticeFormPage = new SeleniumPracticeFormPage(driver);
        console.log('Browser started');
        await driver.get('https://www.techlistic.com/p/selenium-practice-form.html');
        console.log('Page loaded');
    });

    afterEach(async function() {
        if (driver) {
            await driver.quit();
        }
        console.log('Browser quit');
    });

    it('Test 1', async function() {
        await seleniumPracticeFormPage.enterFirstName('Martin');
        await seleniumPracticeFormPage.enterLastName('Backhaus');
    });

    it('Test 2', async function() {
        await seleniumPracticeFormPage.selectGender('male');
        await seleniumPracticeFormPage.selectGender('female');
    });

    it('Test 3', async function() {
        for (let i = 1; i <= 7; i++) {
            await seleniumPracticeFormPage.selectExperience(i);
            const checkbox = await driver.findElement(By.id(`exp-${i - 1}`));
            const isSelected = await checkbox.isSelected();
            isSelected.should.be.true;
            console.log(`Checkbox de ${i} años seleccionado`);
        }
    });

    it('Test 4', async function() {
        for (let i = 1; i <= 7; i++) {
            await seleniumPracticeFormPage.selectExperience(i);
            const selectedCheckbox = await driver.findElement(By.id(`exp-${i - 1}`));
            const isSelected = await selectedCheckbox.isSelected();
            isSelected.should.be.true;

            for (let j = 1; j <= 7; j++) {
                if (j !== i) {
                    const otherCheckbox = await driver.findElement(By.id(`exp-${j - 1}`));
                    const otherIsSelected = await otherCheckbox.isSelected();
                    otherIsSelected.should.be.false;
                }
            }
            console.log(`Checkbox de ${i} años está seleccionado y los otros no`);
        }
    });
});

