import { Builder, By, Key, until } from 'selenium-webdriver';

async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        // Seleccionar y clickear el primer checkbox
        let firstCheckbox = await driver.findElement(By.name('li1'));
        await firstCheckbox.click();

        // Verificar si el span asociado cambió a 'done-true'
        let firstItemStatus = await driver.findElement(By.xpath("//span[@class='done-true']"));
        if (firstItemStatus) {
            console.log("El primer ítem está marcado como hecho.");
        } else {
            console.log("El primer ítem no está marcado como hecho.");
        }

        let secondCheckbox = await driver.findElement(By.name('li2'));
        await secondCheckbox.click()

        // Esperar un poco para observar los cambios
        await new Promise(resolve => setTimeout(resolve, 50));

    } finally {
        await driver.quit();
    }
}

example();
