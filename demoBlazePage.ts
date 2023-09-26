import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class demoBlaze extends BasePage {
    url: string = 'https://www.demoblaze.com/';
    sgs6: By = By.xpath('//a[text()= "Samsung galaxy s6"]')
    sgs6InCart: By = By.xpath('//td[text()= "Samsung galaxy s6"]')
    nokia: By = By.xpath('//a[text()= "Nokia lumia 1520"]')
    nokiaInCart: By = By.xpath('//td[text()= "Nokia lumia 1520"]')
    homeBtn: By = By.xpath('//a[text()= "Home "]')
    contactBtn: By =By.xpath('//a[text()= "Contact"]')
    addCart: By = By.xpath('//a[text()= "Add to cart"]')
    cart: By = By.css("#cartur")
    placeOrder: By = By.xpath('//button[text()= "Place Order"]')
    name: By = By.css("#name")
    country: By = By.css("#country")
    city: By = By.css("#city")
    card: By = By.css("#card")
    month: By = By.css("#month")
    year: By = By.css("#year")
    contactEmail: By = By.css('#recipient-email')
    contactName: By = By.css('#recipient-name')
    messageText: By = By.css('#message-text')
    sendMessage: By = By.xpath('//button[text()= "Send message"]')
    purchaseBtn: By = By.xpath('//button[text()= "Purchase"]')
    okBtn: By = By.xpath('//button[text()= "OK"]')
    deleteFirst: By = By.xpath('(//a[text()= "Delete"])[1]')
    phoneCategory: By = By.xpath('//a[text()= "Phones"]')

}

//driver.switchTo().alert().accept(); - accept the product added popup