'use strict';

//This is used to store the locators for app elements
module.exports = {
    SettingsIcon: async function () {
        return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button';
    },
    LogoutButton: async function () {
        return '//android.widget.Button[@content-desc="Log out"]';
    },
    RegisterNowButton: async function () {
        return '//android.view.View[normalize-space(@content-desc)="Don\'t have an account? Register now"]';
    },    
    

};


