/* global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"cz/muni/fi/pb138/mobilePresence/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"cz/muni/fi/pb138/mobilePresence/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cz.muni.fi.pb138.mobilePresence.view."
	});

	sap.ui.require([
		"cz/muni/fi/pb138/mobilePresence/test/integration/navigationJourney"
	], function () {
		QUnit.start();
	});
});