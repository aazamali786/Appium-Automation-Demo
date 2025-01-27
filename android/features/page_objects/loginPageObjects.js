'use strict';

//This is used to store the locators for app elements
module.exports = {
    usernameField: async function () {
        return '//android.widget.EditText[1]';
    },
    passwordField: async function () {
        return '//android.widget.EditText[2]';
    },
    loginButton: async function () {
        return '//android.view.View[@content-desc="Log in"]';
    },
    goToDetailButton:async function () {
        return '(//android.widget.Button[@content-desc="Go to detail page"])[1]';
    }

};
