sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "cz/muni/fi/pb138/mobilePresence/model/formatter"
],
        function (Controller, JSONModel, Formatter) {
            "use strict";

            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Detail", {
                /*
                 onInit : function(oEvent) {
                 this._oRouter = this.getOwnerComponent().getRouter();
                 this._oRouter.getRoute("detail").attachPatternMatched(
                 this._onPatternMatched, this);
                 
                 },
                 _onPatternMatched : function(oEvent) {
                 var oArguments = oEvent.getParameter("arguments");
                 this.getView().bindElement("list>/list/" + oArguments.itemPath );
                 }
                 */
                formatter: Formatter,

                onInit: function () {
                    var oModel = this.getOwnerComponent().getModel();
                    var oContext = new sap.ui.model.Context(oModel, "/data/0/children/0");
                    this.getView().setBindingContext(oContext);

                }
            });
        });