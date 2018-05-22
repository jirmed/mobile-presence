/*global QUnit*/

sap.ui.define([
    "cz/muni/fi/pb138/mobilePresence/controller/App.controller",
    "sap/ui/thirdparty/sinon"
], function (oController, sinon) {
    "use strict";

    QUnit.module("App Controller");

    QUnit.test("Init", function (assert) {

        var oAppController = new oController();

        sinon.stub(oAppController, "getView").returns({
            addStyleClass: function() {}
        });

        sinon.stub(oAppController, "getOwnerComponent").returns({
            getContentDensityClass: function() {}
        });
        oAppController.onInit();
        assert.ok(oAppController);
    });

});
