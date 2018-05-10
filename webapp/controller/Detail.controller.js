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
                    
                    console.log("Chart");
                    console.log(this.byId("chartId"))
                    console.log(this.byId("chartId").getBinding());
//                            getBinding("data").checkUpdate ( true )
                    
//                    var oModel = this.getOwnerComponent().getModel();
//                    var oContext = new sap.ui.model.Context(oModel, "/data/0/children/0");
//                    this.getView().setBindingContext(oContext);
//                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
                },
                _onObjectMatched: function (oEvent) {
//                    this.getView().bindElement({
//                        path: "/" + oEvent.getParameter("arguments").placeId,
//                        model: ""
                    //                  });
                    console.log("Arguments:");
                    var sPath = decodeURIComponent(oEvent.getParameter("arguments").context);
                    console.log(sPath);
                    var oModel = this.getOwnerComponent().getModel();
//                    var oContext = new sap.ui.model.Context(oModel, sPath);
//                  this.getView().setBindingContext(oContext);
//                    console.log(this.getView().byId("chartId"));
                    this.getView().byId("chartId").bindElement(sPath);;
                }
            });
        });