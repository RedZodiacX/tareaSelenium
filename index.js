
const {Browser, Builder, By, Select} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOption = new Chrome.Options();
        // chromeOption.headless();
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOption).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
        // llamado de los las etiquetas html
        const submit = await driver.findElement(By.css('button[type="submit"]'));
        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        const textDropdown = await driver.findElement(By.css('select[name="my-select"]'));
        const inputColor = await driver.findElement(By.css('input[name="my-colors"]'));
        const inputDate = await driver.findElement(By.css('input[name="my-date"]'));
        const checkbox = await driver.findElement(By.id("my-check-2"));
        
        
        // uso de los elementos html
        await textArea.sendKeys("anita lava la tina.");        
        await delay(2000);
        const select = await new Select(textDropdown);
        await select.selectByValue('3');
        await delay(2000);
        await inputColor.sendKeys('#20A722');
        await delay(2000);
        await inputDate.sendKeys('08-16-1970');
        await delay(2000);
        await checkbox.click();
        await delay(2000);
        await submit.click();

        // trae el mensaje que sale al clic del boton
        const h1Element = await driver.findElement(By.className('display-6'));
        const h1Text = await h1Element.getText();
        console.log(h1Text);
        await delay(2000);
        const textResult = await driver.findElement(By.id("message"));
        const textvalue = await textResult.getText();
        console.log(textvalue);
        await delay(2000);

    } catch (error) {console.log(error);}
    finally {
        if (driver) {
            await driver.quit();
        }
    }
}

start();