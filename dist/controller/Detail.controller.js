sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "cz/muni/fi/pb138/mobilePresence/model/formatter"
],
        function (Controller, JSONModel, Formatter) {
            "use strict";

            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Detail", {

                formatter: Formatter,

                onInit: function () {
                    
                    //attach callback on matched
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
                },
                _onObjectMatched: function (oEvent) {
                    
                    var oView = this.getView();

                    //decode and set context from master
                    var sPath = decodeURIComponent(oEvent.getParameter("arguments").context);
                    var oContext = new sap.ui.model.Context(oView.getModel(), sPath);
                    oView.setBindingContext(oContext);
                    
                    //update chart
                    oView.byId("chartId").update();
                },
                onNavBack: function (oEvent) {
                    //back to master
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("master");
                }
            });
        });