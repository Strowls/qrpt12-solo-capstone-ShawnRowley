import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Regression test - Not able to log in with invalid credentials', async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.loginBtn);
    await db.driver.sleep(1000);
    await db.setInput(db.loginUser, 'thisshouldntwork');
    await db.setInput(db.loginPW, 'thisshouldntwork');
    await db.click(db.loginConfirm);
    await db.driver.sleep(1000);
    let alertText = await db.driver.switchTo().alert().getText();
    expect(alertText).toContain("User does not exist.");
    await db.driver.sleep(1000);
    await db.driver.quit();
})