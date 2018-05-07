sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
        function (Controller, MessageToast) {
            "use strict";

            return Controller.extend("cz.muni.fi.pb138.mobilePresence.controller.Master",
                    {
//				oFormatter : Formatter,
                        onInit: function (oEvent) {
                        }
                        /*        
                         onPressHello : function() {
                         console.log("hello");
                         var oModel = this.getView().getModel();
                         console.log(oModel);
                         // console.log(oModel.getProperty("/recipient/name"));
                         MessageToast.show("Hello "
                         + this.getView().getModel().getProperty(
                         "/recipient/name"));
                         },
                         onItemPress : function(oEvent) {
                         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                         var oBindingContext = oEvent.getSource().getBindingContext();
                         var sType = oBindingContext.getProperty('type');
                         var sPath = oBindingContext.getPath().substr(
                         '/list/'.length);
                         switch (sType) {
                         case 'INV':
                         oRouter.navTo("invoice", {
                         itemPath : sPath
                         });
                         break;
                         case 'ORD':
                         oRouter.navTo("order", {
                         itemPath : sPath
                         });
                         break;
                         case 'LEAVE':
                         oRouter.navTo("leave", {
                         itemPath : sPath
                         });
                         break;
                         default:
                         console.log(sType);
                         oRouter.navTo("empty");
                         break;
                         }
                         }
                         */
                    });
        });