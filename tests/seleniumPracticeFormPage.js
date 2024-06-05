import { By } from 'selenium-webdriver'

class SeleniumPracticeFormPage {
    constructor(driver) {
        this.driver = driver
        this.firstNameInput = By.name('firstname')
        this.lastNameInput = By.name('lastname')
        this.maleCheckBox = By.id('sex-0')
        this.femmaleCheckBox = By.id('sex-1')
        this.yearsOfExp = []
        for (let i=0; i < 7; i++) {
            this.yearsOfExp.push(By.id(`exp-${i}`))
        }
    }
    async enterFirstName(firstName) {
        await this.driver.findElement(this.firstNameInput).sendKeys(firstName)
    }

    async enterLastName(lastname) {
        await this.driver.findElement(this.lastNameInput).sendKeys(lastname)
    }

    async selectGender(gender) {
        if (gender.toLowerCase() === 'male') {
            const maleElement = await this.driver.findElement(this.maleCheckBox)
            await this.driver.executeScript('arguments[0].scrollIntoView(true)', maleElement)
            await maleElement.click()
        } else if (gender.toLowerCase() === 'female') {
            const femaleElement = await this.driver.findElement(this.femmaleCheckBox)
            await this.driver.executeScript('arguments[0].scrollIntoView(true)', femaleElement)
            await femaleElement.click()
        } else {
            throw new Error('Invalid geneder  value. Use "Male" or "Female"')
        }
    }

    async selectExperience(years) {
        if (years > 7 || years < 1) {
            throw new Error('Invalid years of experience mai broda')
        }
        const experienceCheckbox = this.yearsOfExp[years - 1]
        const checkboxElement = await this.driver.findElement(experienceCheckbox)
        await this.driver.executeScript("arguments[0].scrollIntoView(true)", checkboxElement)
        await checkboxElement.click()
    }
}

export default SeleniumPracticeFormPage;