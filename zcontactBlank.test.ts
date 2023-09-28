import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze
const fs = require ("fs")

test ('Confirmation test - Contact field does not accept empty values',async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.contactBtn);
    await db.driver.sleep(1000)
    await db.click(db.sendMessage);
    let alertText = await db.driver.switchTo().alert().getText();
    expect(alertText).not.toBe("Thanks for the message!!")
    //else (await fs.writeFile(`${__dirname}/blankContact.png`,
    //await db.driver.takeScreenshot(), "base64",
    //(e) => {
    //    if (e) console.error(e)
    //    else console.log('Save Succesful')
    //}
    //))
    await db.driver.quit();
})