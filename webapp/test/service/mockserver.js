sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";
    return {
        init: function () {
            // create
            var oMockServer = new sap.ui.core.util.MockServer({
                rootUri: "../service/",
                requests: [{
                        method: "GET",
                        path: "presence\.json",
                        response: function (oXhr, id) {
                            console.log("hhhhhhhhhhhhhhh");
                            oXhr.respondFile(200, {},"service/presence.json");
                        }
                    }
                ]
            });
//            var oUriParameters = jQuery.sap.getUriParameters();
            // configure
//            MockServer.config({
//                autoRespond: true,
//                autoRespondAfter: oUriParameters.get("serverDelay") || 1000
//            });
            // simulate
//			var sPath = jQuery.sap.getModulePath("cz.muni.fi.pb138.mobilePresence.test.service");
//			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
//			oMockServer.simulate(sPath + "/presence.json");
            // start
            oMockServer.start();
        }
    };
}
);