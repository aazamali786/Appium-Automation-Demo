const superagent = require('superagent');
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const newWorkoutPlanObjects = require('../page_objects/newWorkoutPlanObjects');
const loginPageObjects = require('../page_objects/loginPageObjects');
const data = require('../../fixture/user.json');
const { assert } = require('chai');

const timeout = 60000;

When(/^The user is on the workout tab$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.WorkoutTab())), timeout);
    await this.driver.findElement({ xpath: newWorkoutPlanObjects.WorkoutTab() }).click();
});

When(/^The user clicks on the add icon$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.AddIcon())), timeout);
  await this.driver.findElement({ xpath: newWorkoutPlanObjects.AddIcon() }).click();
});

When(/^The user fills in the workout plan name and description$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.NameTextField())), timeout);
  const nameField = await this.driver.findElement({ xpath: newWorkoutPlanObjects.NameTextField() });
  await nameField.click();
  await nameField.sendKeys(data.WorkoutPlanName);

  await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.DescTextField())), timeout);
  const descField = await this.driver.findElement({ xpath: newWorkoutPlanObjects.DescTextField() });
  await descField.click();
  await descField.sendKeys(data.WorkoutPlanDesc);
});

When(/^The user saves the workout plan$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.SaveButton())), timeout);
  await this.driver.findElement({ xpath: newWorkoutPlanObjects.SaveButton() }).click();
});


Then(/^The new workout plan should be visible in the list$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.BackButton())), timeout);
  await this.driver.findElement({ xpath: newWorkoutPlanObjects.BackButton() }).click();
  const el = await this.driver.wait(until.elementLocated(By.xpath(newWorkoutPlanObjects.NewAddedPlan())), timeout);
  assert.exists(el);
});