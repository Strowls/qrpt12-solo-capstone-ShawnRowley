import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Able to log in, add product, log out and log back in with the product still in cart',async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.cart);
    await db.driver.sleep(1000);
    expect(await db.driver.findElements(db.sgs6InCart)).toHaveLength(0);
    await db.click(db.loginBtn);
    await db.driver.sleep(1000);
    await db.setInput(db.loginUser, 'test');
    await db.setInput(db.loginPW, 'test');
    await db.click(db.loginConfirm);
    await db.driver.sleep(1000)
    await db.click(db.homeBtn)
    await db.driver.sleep(1000);
    await db.click(db.sgs6);
    await db.click(db.addCart);
    await db.driver.sleep(1000)
    await db.driver.switchTo().alert().accept();
    await db.click(db.cart);
    let cartItem = await db.getText(db.sgs6InCart);
    expect(cartItem).toContain("Samsung galaxy s6");
    await db.driver.sleep(1000)
    await db.click(db.logoutBtn);
    await db.click(db.homeBtn);
    await db.click(db.cart);
    await db.driver.sleep(1000)
    expect(await db.driver.findElements(db.sgs6InCart)).toHaveLength(0);
    await db.click(db.homeBtn);
    await db.click(db.loginBtn);
    await db.driver.sleep(1000);
    await db.setInput(db.loginUser, 'test');
    await db.setInput(db.loginPW, 'test');
    await db.click(db.loginConfirm);
    await db.driver.sleep(1000);
    await db.click(db.cart);
    await db.driver.sleep(1000)
    expect(cartItem).toContain("Samsung galaxy s6");
    await db.click(db.deleteFirst)
    await db.driver.sleep(1000)
    await db.driver.quit();
})