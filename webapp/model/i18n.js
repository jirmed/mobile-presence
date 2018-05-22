sap.ui.define([], function () {
    "use strict";
    //private scope
    return {
        i18nText: function (input, that) {
            //localize text
            if (input === undefined)
                return;
            var result = that.getView().getModel("i18n").getProperty(input);
            if (input) {
                return result;
            } else {
                return input;
            }
        }
    };
});
