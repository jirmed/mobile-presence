/*global QUnit*/

sap.ui.define([
    "cz/muni/fi/pb138/mobilePresence/model/formatter",
    "sap/ui/model/resource/ResourceModel",
    "cz/muni/fi/pb138/mobilePresence/model/i18n",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit",
    "sap/ui/model/resource/ResourceModel",
], function (formatter, ResourceModel, i18n) {
    "use strict";
    QUnit.module("Formatters", {
        setup: function () {
            this._oResourceModel = new ResourceModel({
                bundleUrl: jQuery.sap.getModulePath("cz.muni.fi.pb138.mobilePresence", "/i18n/i18n_en.properties")
            });
        },
        teardown: function () {
            this._oResourceModel.destroy();
        }
    });

//    sinon.stub(i18n, "i18nText", function (input) {
//        return input;
//    });
    QUnit.test("chartData", function (assert) {
        // Arrange
        var oViewStub = {
            getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
        };
        var oControllerStub = {
            getView: this.stub().returns(oViewStub)
        };

        // System under test
        var fnIsolatedFormatter = formatter.chartData.bind(oControllerStub);

        // Assert

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
                            label: "Workday"},
                        {data: [4, 5, 6],
                            label: "Weekend"}
                    ]
                };
        var result = fnIsolatedFormatter(format, data);
        assert.deepEqual(result, expected, "Chart data set correctly");
    });

    QUnit.test("chartOptions", function (assert) {
        // Arrange
        var oViewStub = {
            getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
        };
        var oControllerStub = {
            getView: this.stub().returns(oViewStub)
        };

        // System under test
        var fnIsolatedFormatter = formatter.chartOptions.bind(oControllerStub);

        // Assert

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
                            "labelString": "Time"
                        }
                    }
                ],
                "yAxes": [
                    {
                        "scaleLabel": {
                            "labelString": "Connected Device Count"
                        }
                    }
                ]
            }
        };

        var result = fnIsolatedFormatter(format);
        assert.deepEqual(result, expected, "Chart Options set correctly");
    });

    QUnit.test("i18nText", function (assert) {
        // Arrange
        var oViewStub = {
            getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
        };
        var oControllerStub = {
            getView: this.stub().returns(oViewStub)
        };

        // System under test
        var fnIsolatedFormatter = formatter.i18nText.bind(oControllerStub);

        // Assert
        assert.strictEqual(fnIsolatedFormatter("undefined text"),"undefined text", "Undefined text remains untranslated - correct");
        assert.strictEqual(fnIsolatedFormatter("kraj"),"Region", "Region translated correctly");
        assert.strictEqual(fnIsolatedFormatter("city"),"City", "City translated correctly");
        assert.strictEqual(fnIsolatedFormatter("time"),"Time", "Time translated correctly");
    });

}
);
