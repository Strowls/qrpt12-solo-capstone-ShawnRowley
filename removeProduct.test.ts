import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Able to add and remove products from cart',async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.sgs6);
    await db.click(db.addCart);
    await db.driver.sleep(1000);
    await db.driver.switchTo().alert().accept();
    await db.click(db.homeBtn);
    await db.click(db.nokia);
    await db.click(db.addCart);
    await db.driver.sleep(1000);
    await db.driver.switchTo().alert().accept();
    await db.click(db.cart);
    await db.click(db.deleteFirst);
    await db.driver.sleep(1000);
    expect(await db.driver.findElements(db.sgs6InCart)).toHaveLength(0);
    await db.driver.quit();

})