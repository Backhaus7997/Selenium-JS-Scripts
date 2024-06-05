import { Builder, By, Key } from 'selenium-webdriver';
import { should } from 'chai';
should();

describe('Add todo tests', function() {
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/'); 
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('successfully adds a todo to the application', async function() {
        await driver
            .findElement(By.id('sampletodotext'))
            .sendKeys('Learn selenium', Key.RETURN);
        let todoText = await driver
            .findElement(By.xpath('//li[last()]')).getText();
        todoText.should
            .equal('Learn selenium');
        await new Promise(resolve => setTimeout(resolve, 5000));  // Opcional: Espera para observar el resultado
    });

    it('Successfully executed the second test', async function() {
        let firstCheckbox = await driver
            .findElement(By.name('li1'));
        await firstCheckbox
            .click();

        // Verificar si el span asociado cambió a 'done-true'
        let firstItemStatus = await driver
            .findElement(By.xpath("//span[@class='done-true']"));
        if (firstItemStatus) {
            console.log("El primer ítem está marcado como hecho.");
        } else {
            console.log("El primer ítem no está marcado como hecho.");
        }

        let secondCheckbox = await driver.findElement(By.name('li2'));
        await secondCheckbox
            .click()

        await new Promise(resolve => setTimeout(resolve, 5000));
    });

});





 