sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
        function (Controller, MessageToast) {
            "use strict";
            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Master",
                    {
                        onInit: function (oEvent) {
                        },
                        onClick: function (oEvent) {
                            var oContext = oEvent.getSource().getBindingContext();
                            var oItem = oEvent.getSource();
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            var oContext = oItem.getBindingContext().getPath();
                            oRouter.navTo("detail",{context:encodeURIComponent(oContext)},false);
                        }
                    });
        });