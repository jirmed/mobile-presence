sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
        function (Controller, MessageToast) {
            "use strict";
            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Master",
                    {
                        onInit: function (oEvent) {
                        },
                        onAfterRendering: function () {
                            //default expand level
                            var oTree = this.getView().byId("treeId");
                            oTree.expandToLevel(1);  

                        },
                        onClick: function (oEvent) {
                            
                            //get selected item context
                            var oPath = oEvent.getSource().getBindingContext().getPath();

                            //navigate to detail
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("detail", {context: encodeURIComponent(oPath)});
                        }
                    });
        });