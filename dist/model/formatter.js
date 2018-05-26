sap.ui.define(["cz/muni/fi/pb138/mobilePresence/model/i18n"
], function (i18n) {
    "use strict";

    return {
        i18n : i18n,
        
        chartData: function (format, data) {
            //format data for chart imput
            if (format === undefined) return null;
            var result = format;
            if (result.datasets !== undefined && data !== null) {
                result.datasets[0].data = data.workday;
                result.datasets[0].label = i18n.i18nText('workday', this);
                result.datasets[1].data = data.weekend;
                result.datasets[1].label = i18n.i18nText('weekend', this);
            }
            return result;
        },
        chartOptions: function (format) {
            if (format === undefined) return null;
            var result = format;
            result.scales.xAxes[0].scaleLabel.labelString = i18n.i18nText("time",this);
            result.scales.yAxes[0].scaleLabel.labelString = i18n.i18nText("mobileCount",this);
            return result;
        },
        i18nText: function (input) {
            return(i18n.i18nText(input, this));
        }
    };
});