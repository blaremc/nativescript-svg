"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_svg_directives_1 = require("./nativescript-svg-directives");
var NativeScriptSvgModule = /** @class */ (function () {
    function NativeScriptSvgModule() {
    }
    NativeScriptSvgModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [nativescript_svg_directives_1.DIRECTIVES],
                    exports: [nativescript_svg_directives_1.DIRECTIVES],
                },] },
    ];
    return NativeScriptSvgModule;
}());
exports.NativeScriptSvgModule = NativeScriptSvgModule;
element_registry_1.registerElement("SVGImage", function () { return require("../").SVGImage; });
