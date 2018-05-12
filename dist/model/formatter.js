sap.ui.define([], function () {
    "use strict";
    return {
        chartProperties: function (format, data, workday_i18n, weekend_i18n) {
            
            //format data for chart imput
            var result = format;
            if (result.datasets !== undefined && data !== null) {
                result.datasets[0].data = data.workday;
                result.datasets[0].label = workday_i18n;
                result.datasets[1].data = data.weekend;
                result.datasets[1].label = weekend_i18n;
            }
            return result;
        },
        i18nText: function (input) {
            //localize text
            if (input === undefined) return;
            var result = this.getView().getModel("i18n").getResourceBundle().getText(input);
            if (input) {
                return result;
            } else {
                return input;
            }
            ;
        }
    };
});