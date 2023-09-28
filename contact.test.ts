import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Able to sent Contact message',async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.contactBtn);
    await db.driver.sleep(1000)
    await db.setInput(db.contactEmail, 'Test@test.com');
    await db.setInput(db.contactName, 'Test Name');
    await db.setInput(db.messageText, 'This is a test message');
    await db.driver.sleep(1000);
    await db.click(db.sendMessage);
    await db.driver.sleep(1000)
    let alertText = await db.driver.switchTo().alert().getText();
    expect(alertText).toContain("Thanks for the message!!");
    await db.driver.quit();
})  