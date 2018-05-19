sap.ui.define([], function () {
    "use strict";

    //private scope
    var _i18nText = function (input, that) {
        //localize text
        if (input === undefined)
            return;
        var result = that.getView().getModel("i18n").getProperty(input);
        if (input) {
            return result;
        } else {
            return input;
        };
    };

    return {
        chartData: function (format, data) {
            //format data for chart imput
            if (format === undefined) return null;
            var result = format;
            if (result.datasets !== undefined && data !== null) {
                result.datasets[0].data = data.workday;
                result.datasets[0].label = _i18nText('workday', this);
                result.datasets[1].data = data.weekend;
                result.datasets[1].label = _i18nText('weekend', this);
            }
            return result;
        },
        chartOptions: function (format) {
            if (format === undefined) return null;
            var result = format;
            result.scales.xAxes[0].scaleLabel.labelString = _i18nText("time",this);
            result.scales.yAxes[0].scaleLabel.labelString = _i18nText("mobileCount",this);
            return result;
        },
        i18nText: function (input) {
            return(_i18nText(input, this));
        }
    };
});