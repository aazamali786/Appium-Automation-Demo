'use strict';

//This is used to store the locators for app elements
module.exports = {
    WorkoutTab: async function () {
        return '//android.view.View[normalize-space(@content-desc)="Workout Tab 2 of 5"]';
    },
    AddIcon: async function () {
        return '(//android.widget.Button)[last()]';
    },
    NameTextField: async function () {
        return '//android.widget.EditText[1]';
    },
    DescTextField: async function () {
        return '//android.widget.EditText[2]';
    },
    SaveButton: async function () {
        return '//android.widget.Button[@content-desc="Save"]';
    },
    BackButton: async function () {
        return '//android.widget.Button[@content-desc="Back"]';
    },
    NewAddedPlan: async function () {
        return '(//android.widget.Button[1])[2]';
    },

};
