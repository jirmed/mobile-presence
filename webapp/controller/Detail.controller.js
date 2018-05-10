sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "cz/muni/fi/pb138/mobilePresence/model/formatter"
],
        function (Controller, JSONModel, Formatter) {
            "use strict";

            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Detail", {

                formatter: Formatter,

                onInit: function () {
                    
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
                },
                _onObjectMatched: function (oEvent) {
                    var sPath = decodeURIComponent(oEvent.getParameter("arguments").context);
                    var oModel = this.getOwnerComponent().getModel();
                    var oContext = new sap.ui.model.Context(oModel, sPath);
                    this.getView().setBindingContext(oContext);
                    this.getView().byId("chartId").update();
                }
            });
        });