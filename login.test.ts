import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Able to log in with valid credentials', async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.loginBtn);
    await db.driver.sleep(1000);
    await db.setInput(db.loginUser, 'test');
    await db.setInput(db.loginPW, 'test');
    await db.click(db.loginConfirm);
    await db.driver.sleep(1000)
    let welcomeUser = await db.getText(db.nameOfUser);
    expect(welcomeUser).toContain("Welcome test");
    await db.driver.quit();
})