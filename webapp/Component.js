sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "cz/muni/fi/pb138/mobilePresence/model/models",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("cz.muni.fi.pb138.mobilePresence.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            //set model
/*            
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("service/presence.json");
            console.log("Load Model");
            console.log(oModel);

            sap.ui.getCore().setModel(oModel, "test");
            this.setModel(oModel, "test1");
*/
            // set local data model (data.json)
            var oConfig = this.getMetadata().getConfig();
            var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
            // mapping to the property "modelLocal" in the "config" property of the app descriptor
            var chartJSModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.chartjsModel));
            var c3jsModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.c3jsModel));
            this.setModel(chartJSModel, "chartjsData");
            this.setModel(c3jsModel, "c3jsData");


            // create the views based on the url/hash
            this.getRouter().initialize();
        },
        getContentDensityClass: function () {
            if (!this._sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});