const superagent = require('superagent');
const { When, Then } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const logoutObjects = require('../page_objects/logoutObjects');
const loginPageObjects = require('../page_objects/loginPageObjects');
const timeout = 60000;
const data = require('../../fixture/user.json');
const utils = require('../utils/utility');
var assert = require('chai').assert;

let otp = "";
When(/^I navigate to the settings and log out$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(logoutObjects.SettingsIcon())));
    await this.driver.findElement({ xpath: logoutObjects.SettingsIcon() }).click();
    await this.driver.wait(until.elementLocated(By.xpath(logoutObjects.LogoutButton())));
    await this.driver.findElement({ xpath: logoutObjects.LogoutButton() }).click();
});
Then(/^I should see the "Register Now" button on the login screen$/, async function () {
    const el = await this.driver.wait(until.elementLocated(By.xpath(logoutObjects.RegisterNowButton())), timeout);
    assert.exists(el);
});
