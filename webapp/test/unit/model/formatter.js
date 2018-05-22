/*global QUnit*/

sap.ui.define([
    "cz/muni/fi/pb138/mobilePresence/model/formatter",
    "sap/ui/thirdparty/sinon",
    "cz/muni/fi/pb138/mobilePresence/model/i18n"
], function (oFormatter, sinon, i18n) {
    "use strict";
    QUnit.module("Formatters");
    sinon.stub(i18n, "i18nText", function (input) {
        return input;
    });
    QUnit.test("chartData", function (assert) {

        var format = {
            "datasets": [{}, {}]
        };
        var data = {
            workday: [1, 2, 3],
            weekend: [4, 5, 6]
        };
        var expected =
                {
                    "datasets": [
                        {data: [1, 2, 3],
                            label: "workday"},
                        {data: [4, 5, 6],
                            label: "weekend"}
                    ]
                };
        var result = oFormatter.chartData(format, data);
        assert.deepEqual(result, expected, "Set data and labels");
    });
    QUnit.test("chartOptions", function (assert) {

        var format =
                {scales: {
                        xAxes: [
                            {scaleLabel: {}}
                        ],
                        yAxes: [
                            {scaleLabel: {}}
                        ]
                    }};

        var expected = {
            "scales": {
                "xAxes": [
                    {
                        "scaleLabel": {
                            "labelString": "time"
                        }
                    }
                ],
                "yAxes": [
                    {
                        "scaleLabel": {
                            "labelString": "mobileCount"
                        }
                    }
                ]
            }
        };

        var result = oFormatter.chartOptions(format);
        assert.deepEqual(result, expected, "Set Options");
    });
}
);
