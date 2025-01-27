const superagent = require('superagent');
const { When, Then } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const loginPageObjects = require('../page_objects/loginPageObjects');
const timeout = 60000;
const data = require('../../fixture/user.json');
const utils = require('../utils/utility');
var assert = require('chai').assert;

let otp = "";

When(/^User launch and login to android application$/, async function () {

  //User enter Username under the field
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.usernameField())));
  await this.driver.findElement({ xpath: loginPageObjects.usernameField() }).click();
  await this.driver.findElement({ xpath: loginPageObjects.usernameField() }).sendKeys(data.Username);

  //User enter password under the field
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.passwordField())));
  await this.driver.findElement({ xpath: loginPageObjects.passwordField() }).click();
  await this.driver.findElement({ xpath: loginPageObjects.passwordField() }).sendKeys(data.Password);

  //This will click on LOGIN button
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.loginButton())));
  await this.driver.findElement({ xpath: loginPageObjects.loginButton() }).click();
});
Then(/^The user should be able to login successfully$/, async function () {
    const el = await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.goToDetailButton())), timeout);
    assert.exists(el);
});
