import { demoBlaze } from "./demoBlazePage";
const db = new demoBlaze

test ('Able to purchase products added to cart',async () => {
    await db.navigate();
    await db.driver.manage().window().maximize();
    await db.click(db.sgs6);
    await db.click(db.addCart);
    await db.driver.sleep(1000)
    await db.driver.switchTo().alert().accept();
    await db.click(db.cart);
    await db.click(db.placeOrder);
    await db.setInput(db.name, 'Test Name');
    await db.setInput(db.country, 'US');
    await db.setInput(db.city, 'Orem');
    await db.setInput(db.card, '1234123412341234');
    await db.setInput(db.month, '12');
    await db.setInput(db.year, '2023');
    await db.click(db.purchaseBtn);
    await db.getElement(db.okBtn);
    await db.driver.sleep(2000)
    await db.driver.quit();
})